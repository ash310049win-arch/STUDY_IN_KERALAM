// @ts-nocheck — raw third-party embed script vendored as-is (see comments below).
declare global {
  interface Window {
    __agentive_widget_active?: boolean;
    __agentive_widget_adc015b4b4b87891bbb5f1e9?: boolean;
  }
}

/**
 * Chat Widget Embed Script
 * Usage (standalone): <script src="/chat-widget-embed.js" data-widget-uid="UID" data-api-url="API_URL" async></script>
 * Inlined here as a module with the widget's config baked in.
 */
(function () {
  "use strict";

  if (typeof window === "undefined") return;
  // A host SPA (e.g. the marketing site) sets window.__agentive_widget_active =
  // false on route-change/unmount, so a late-loading embed never initialises on
  // the wrong page. Undefined for normal third-party embeds -> always runs.
  if (window.__agentive_widget_active === false) return;
  if (window.__agentive_widget_adc015b4b4b87891bbb5f1e9) return;
  window.__agentive_widget_adc015b4b4b87891bbb5f1e9 = true;

  // Widget config (normally read from the <script> tag's data attributes)
  var WIDGET_UID = "adc015b4b4b87891bbb5f1e9";
  var WIDGET_ID = "";
  var API_BASE = "https://myappzbackend.com/functions/v1/chat-widget-public";
  if ((!WIDGET_UID && !WIDGET_ID) || !API_BASE) return;

  var effectiveUid = WIDGET_UID || "";

  function visitorKey() { return "chat_visitor_" + effectiveUid; }
  function sessionKey() { return "chat_session_" + effectiveUid; }
  function profileKey() { return "chat_profile_" + effectiveUid; }
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function loadSavedProfile() {
    try {
      var raw = localStorage.getItem(profileKey());
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  }

  function saveProfile(fields) {
    try {
      localStorage.setItem(profileKey(), JSON.stringify(fields));
    } catch (e) { /* ignore */ }
  }

  function validatePrechat(fields) {
    var rf = config.required_fields;
    var errors = {};
    if (rf.name) {
      var name = (fields.name || "").trim();
      if (!name) errors.name = "Name is required";
      else if (name.length < 2) errors.name = "Name must be at least 2 characters";
    }
    if (rf.email) {
      var email = (fields.email || "").trim();
      if (!email) errors.email = "Email is required";
      else if (!EMAIL_RE.test(email)) errors.email = "Enter a valid email address";
    }
    if (rf.phone) {
      var phone = (fields.phone || "").trim().replace(/\s/g, "");
      if (!phone) errors.phone = "Phone is required";
      else if (phone.replace(/\D/g, "").length < 8) errors.phone = "Enter a valid phone number";
    }
    return errors;
  }

  function showPrechatErrors(errors) {
    var keys = Object.keys(errors);
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var el = document.getElementById("cw-err-" + key);
      if (el) el.textContent = errors[key];
      var input = document.getElementById("cw-" + key);
      if (input) input.style.borderColor = "#ef4444";
    }
  }

  function hasCompleteSavedProfile(saved, required) {
    var fields = {
      name: (saved.name || "").trim(),
      email: (saved.email || "").trim(),
      phone: (saved.phone || "").trim(),
    };
    return Object.keys(validatePrechat(fields)).length === 0;
  }

  function clearPrechatErrors() {
    ["name", "email", "phone"].forEach(function (key) {
      var el = document.getElementById("cw-err-" + key);
      if (el) el.textContent = "";
      var input = document.getElementById("cw-" + key);
      if (input) input.style.borderColor = "";
    });
  }

  function getSavedProfileFields() {
    var saved = loadSavedProfile();
    return {
      name: (saved.name || "").trim(),
      email: (saved.email || "").trim(),
      phone: (saved.phone || "").trim(),
    };
  }

  function getVisitorId() {
    var id = localStorage.getItem(visitorKey());
    if (!id) {
      id = crypto.randomUUID ? crypto.randomUUID() : "v_" + Math.random().toString(36).slice(2) + Date.now().toString(36);
      localStorage.setItem(visitorKey(), id);
    }
    return id;
  }

  // State
  var config = null;
  var sessionId = null;
  var messages = [];
  var isOpen = false;
  var showPrechat = false;
  var sending = false;
  var realtimeChannel = null;
  var supabaseClient = null;
  var supabaseLibPromise = null;

  // DOM refs
  var root, fab, chatBox, msgContainer, inputField;

  // ---- API helpers ----
  function api(method, path, body) {
    var opts = { method: method, headers: { "Content-Type": "application/json" } };
    if (body) opts.body = JSON.stringify(body);
    return fetch(API_BASE + "/" + path, opts).then(function (r) { return r.json(); });
  }

  // ---- Load Supabase JS UMD from CDN (once) ----
  function loadSupabaseLib() {
    if (window.supabase && window.supabase.createClient) return Promise.resolve(window.supabase);
    if (supabaseLibPromise) return supabaseLibPromise;
    supabaseLibPromise = new Promise(function (resolve, reject) {
      var s = document.createElement("script");
      s.src = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.min.js";
      s.async = true;
      s.onload = function () { resolve(window.supabase); };
      s.onerror = function () { reject(new Error("Failed to load supabase-js")); };
      document.head.appendChild(s);
    });
    return supabaseLibPromise;
  }

  // ---- Load config ----
  (function loadConfig() {
    var params = new URLSearchParams();
    if (WIDGET_UID) {
      params.set("uid", WIDGET_UID);
    } else {
      params.set("widget_id", WIDGET_ID);
    }
    params.set("origin", window.location.origin);
    api("GET", "config?" + params.toString()).then(function (data) {
      if (data.error || !data.uid) return;
      effectiveUid = data.uid;
      sessionId = localStorage.getItem(sessionKey()) || null;
      config = data;
      // Match the host site's brand color (dark brown) instead of the widget
      // theme configured on the backend (#f43f5e default).
      config.theme_color = "#4d3a2c";
      showPrechat = config.require_user_info && !hasCompleteSavedProfile(loadSavedProfile(), config.required_fields || {});
      injectStyles();
      render();
    });
  })();

  // ---- Styles ----
  /**
   * Resolve the widget's color scheme from config.widget_theme:
   * "light"/"dark" are forced; "auto" (default) follows the HOST PAGE — we read
   * the page's real background color and pick by luminance, falling back to the
   * OS prefers-color-scheme when the background is transparent/unreadable.
   */
  function resolveWidgetTheme() {
    var mode = (config.widget_theme || "auto");
    if (mode === "light" || mode === "dark") return mode;
    try {
      var candidates = [document.body, document.documentElement];
      for (var i = 0; i < candidates.length; i++) {
        var bg = getComputedStyle(candidates[i]).backgroundColor || "";
        var m = bg.match(/rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:[,\s/]+([\d.]+))?/);
        if (!m) continue;
        if (m[4] !== undefined && parseFloat(m[4]) === 0) continue; // transparent
        var lum = 0.2126 * (+m[1]) + 0.7152 * (+m[2]) + 0.0722 * (+m[3]);
        return lum < 128 ? "dark" : "light";
      }
    } catch (e) { /* fall through */ }
    try {
      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
    } catch (e) { /* fall through */ }
    return "light";
  }

  function injectStyles() {
    // Every color below is set EXPLICITLY: the widget lives in the host page's
    // DOM, and dark sites (body{color:#fff} + Tailwind preflight's
    // input{color:inherit}) otherwise bleed white text onto the panel.
    var dark = resolveWidgetTheme() === "dark";
    var T = dark ? {
      panel: "#1f2937", text: "#f9fafb", label: "#9ca3af", msgArea: "#111827",
      inputBg: "#111827", border: "#374151", placeholder: "#6b7280",
      btnHover: "#374151", typingDot: "#4b5563", typingDotTo: "#9ca3af"
    } : {
      panel: "#fff", text: "#111827", label: "#6b7280", msgArea: "#f7f8fa",
      inputBg: "#fff", border: "#e5e7eb", placeholder: "#9ca3af",
      btnHover: "#f0f0f0", typingDot: "#ccc", typingDotTo: "#999"
    };
    var style = document.createElement("style");
    style.textContent = [
      ".cw-root{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;position:fixed;z-index:999999;bottom:20px;" + (config.position === "bottom-left" ? "left:20px" : "right:20px") + ";color:" + T.text + ";text-align:left}",
      ".cw-fab{width:56px;height:56px;border-radius:28px;border:none;cursor:pointer;color:#fff;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 12px rgba(0,0,0,.25);transition:transform .2s}",
      ".cw-fab:hover{transform:scale(1.1)}",
      ".cw-fab svg{width:24px;height:24px}",
      ".cw-box{width:380px;height:520px;border-radius:16px;overflow:hidden;display:flex;flex-direction:column;background:" + T.panel + ";color:" + T.text + ";box-shadow:0 8px 30px rgba(0,0,0,.18);animation:cwSlideUp .25s ease}",
      "@keyframes cwSlideUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}",
      ".cw-header{padding:14px 16px;color:#fff;display:flex;align-items:center;justify-content:space-between}",
      ".cw-header-info{display:flex;align-items:center;gap:10px;min-width:0}",
      ".cw-avatar{width:36px;height:36px;border-radius:18px;background:rgba(255,255,255,.2);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;overflow:hidden}",
      ".cw-avatar img{width:100%;height:100%;object-fit:cover}",
      ".cw-name{font-size:14px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}",
      ".cw-status{font-size:11px;opacity:.8;display:flex;align-items:center;gap:4px}",
      ".cw-dot{width:6px;height:6px;border-radius:3px}",
      ".cw-close{background:none;border:none;color:#fff;cursor:pointer;padding:6px;border-radius:50%;display:flex}",
      ".cw-close:hover{background:rgba(255,255,255,.15)}",
      ".cw-messages{flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:10px;background:" + T.msgArea + "}",
      ".cw-msg{max-width:80%;padding:10px 14px;border-radius:14px;font-size:13px;line-height:1.45;word-wrap:break-word}",
      ".cw-msg-bot{background:" + T.panel + ";color:" + T.text + ";border:1px solid " + T.border + ";align-self:flex-start;border-bottom-left-radius:4px}",
      ".cw-msg-user{color:#fff;align-self:flex-end;border-bottom-right-radius:4px}",
      ".cw-msg-time{font-size:10px;opacity:.5;margin-top:4px}",
      ".cw-btns{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px}",
      ".cw-btn{font-size:11px;padding:4px 10px;border-radius:20px;border:1px solid " + T.border + ";background:" + T.panel + ";color:" + T.text + ";cursor:pointer;transition:background .15s}",
      ".cw-btn:hover{background:" + T.btnHover + "}",
      ".cw-input-bar{padding:10px 12px;border-top:1px solid " + T.border + ";display:flex;gap:8px;background:" + T.panel + "}",
      ".cw-input{flex:1;border:1px solid " + T.border + ";border-radius:8px;padding:8px 12px;font-size:13px;outline:none;color:" + T.text + ";background:" + T.inputBg + "}",
      ".cw-input::placeholder,.cw-prechat input::placeholder{color:" + T.placeholder + "}",
      ".cw-input:focus{border-color:" + config.theme_color + "}",
      ".cw-send{width:36px;height:36px;border-radius:8px;border:none;color:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0}",
      ".cw-send:disabled{opacity:.5;cursor:default}",
      ".cw-prechat{padding:16px;display:flex;flex-direction:column;gap:10px}",
      ".cw-prechat label{font-size:12px;color:" + T.label + ";display:block;margin-bottom:2px}",
      ".cw-prechat input{width:100%;box-sizing:border-box;border:1px solid " + T.border + ";border-radius:8px;padding:8px 10px;font-size:13px;outline:none;color:" + T.text + ";background:" + T.inputBg + "}",
      ".cw-prechat input:focus{border-color:" + config.theme_color + "}",
      ".cw-prechat-btn{width:100%;padding:10px;border:none;border-radius:8px;color:#fff;font-size:14px;font-weight:600;cursor:pointer;margin-top:4px}",
      ".cw-prechat-err{font-size:11px;color:#ef4444;margin-top:2px}",
      ".cw-typing{display:flex;gap:4px;padding:10px 14px;align-self:flex-start}",
      ".cw-typing span{width:6px;height:6px;border-radius:3px;background:" + T.typingDot + ";animation:cwBounce .6s infinite alternate}",
      ".cw-typing span:nth-child(2){animation-delay:.15s}",
      ".cw-typing span:nth-child(3){animation-delay:.3s}",
      "@keyframes cwBounce{to{transform:translateY(-4px);background:" + T.typingDotTo + "}}",
      ".cw-prompt{position:absolute;bottom:100%;margin-bottom:12px;" + (config.position === "bottom-left" ? "left:0" : "right:0") + ";background:" + T.panel + ";color:" + T.text + ";border-radius:10px;padding:10px 14px;box-shadow:0 2px 12px rgba(0,0,0,.12);font-size:13px;max-width:220px;animation:cwFadeIn .3s ease}",
      "@keyframes cwFadeIn{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}",
    ].join("\n");
    document.head.appendChild(style);
  }

  // ---- Render ----
  function render() {
    if (!config) return;
    if (!root) {
      root = document.createElement("div");
      root.className = "cw-root";
      document.body.appendChild(root);
    }
    root.innerHTML = "";

    if (!isOpen) {
      // FAB
      var fabHtml = "";
      if (config.show_prompt) {
        fabHtml += '<div class="cw-prompt">' + esc(config.prompt_message) + "</div>";
      }
      fabHtml += '<button class="cw-fab" style="background:' + config.theme_color + '">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg></button>';
      root.innerHTML = fabHtml;
      root.querySelector(".cw-fab").onclick = function () { isOpen = true; render(); onOpen(); };
      return;
    }

    // Chat box
    var html = '<div class="cw-box">';
    // Header
    html += '<div class="cw-header" style="background:' + config.theme_color + '">';
    html += '<div class="cw-header-info">';
    html += '<div class="cw-avatar">';
    if (config.logo_url) html += '<img src="' + esc(config.logo_url) + '" alt="">';
    else html += esc(config.company_name.charAt(0));
    html += "</div><div>";
    html += '<div class="cw-name">' + esc(config.company_name) + "</div>";
    html += '<div class="cw-status"><div class="cw-dot" style="background:' + (config.is_online ? "#4ade80" : "#9ca3af") + '"></div>';
    html += (config.is_online ? esc(config.agent_name) + " is online" : "Offline") + "</div>";
    html += "</div></div>";
    html += '<button class="cw-close"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>';
    html += "</div>";

    // Messages area
    html += '<div class="cw-messages" id="cw-msgs">';
    if (!config.is_online) {
      html += '<div style="text-align:center;padding:40px 0;font-size:13px;color:#6b7280">' + esc(config.offline_message || "We're currently offline.") + "</div>";
    } else if (showPrechat) {
      var saved = loadSavedProfile();
      html += '<div class="cw-prechat">';
      html += '<div style="font-size:13px;color:#6b7280">' + esc(config.prechat_message || "Please provide your details:") + "</div>";
      if (config.required_fields.name) {
        html += '<div><label>Name *</label><input id="cw-name" placeholder="Your name" value="' + esc(saved.name || "") + '"><div class="cw-prechat-err" id="cw-err-name"></div></div>';
      }
      if (config.required_fields.email) {
        html += '<div><label>Email *</label><input id="cw-email" type="email" placeholder="your@email.com" value="' + esc(saved.email || "") + '"><div class="cw-prechat-err" id="cw-err-email"></div></div>';
      }
      if (config.required_fields.phone) {
        html += '<div><label>Phone *</label><input id="cw-phone" type="tel" placeholder="+1 555 123 4567" value="' + esc(saved.phone || "") + '"><div class="cw-prechat-err" id="cw-err-phone"></div></div>';
      }
      html += '<button class="cw-prechat-btn" id="cw-start" style="background:' + config.theme_color + '">Start Chat</button>';
      html += "</div>";
    } else {
      for (var i = 0; i < messages.length; i++) {
        var m = messages[i];
        var isUser = m.sender_type === "user";
        html += '<div class="cw-msg ' + (isUser ? "cw-msg-user" : "cw-msg-bot") + '"' + (isUser ? ' style="background:' + config.theme_color + '"' : "") + ">";
        html += formatMsg(m.content);
        if (m.payload && m.payload.buttons) {
          html += '<div class="cw-btns">';
          for (var b = 0; b < m.payload.buttons.length; b++) {
            var btn = m.payload.buttons[b];
            var label = typeof btn === "string" ? btn : btn.label || btn.title || btn.id;
            html += '<button class="cw-btn" data-btn="' + esc(label) + '">' + esc(label) + "</button>";
          }
          html += "</div>";
        }
        html += '<div class="cw-msg-time">' + new Date(m.created_at).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) + "</div>";
        html += "</div>";
      }
      if (sending) {
        html += '<div class="cw-typing"><span></span><span></span><span></span></div>';
      }
    }
    html += "</div>";

    // Input bar
    if (sessionId && !showPrechat && config.is_online) {
      html += '<div class="cw-input-bar">';
      html += '<input class="cw-input" id="cw-input" placeholder="Type a message..." ' + (sending ? "disabled" : "") + ">";
      html += '<button class="cw-send" id="cw-send" style="background:' + config.theme_color + '">';
      html += '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg></button>';
      html += "</div>";
    }

    html += "</div>";
    root.innerHTML = html;

    // Wire events
    root.querySelector(".cw-close").onclick = function () {
      isOpen = false;
      render();
    };

    if (showPrechat) {
      var startBtn = root.querySelector("#cw-start");
      if (startBtn) startBtn.onclick = onPrechatSubmit;
    }

    if (sessionId && !showPrechat) {
      inputField = root.querySelector("#cw-input");
      var sendBtn = root.querySelector("#cw-send");
      if (inputField) {
        inputField.addEventListener("keydown", function (e) { if (e.key === "Enter") onSend(); });
        inputField.focus();
      }
      if (sendBtn) sendBtn.onclick = onSend;
    }

    // Button clicks
    var btnEls = root.querySelectorAll(".cw-btn");
    for (var j = 0; j < btnEls.length; j++) {
      btnEls[j].onclick = function () {
        var val = this.getAttribute("data-btn");
        if (inputField) inputField.value = val;
        onSend();
      };
    }

    scrollBottom();
  }

  function scrollBottom() {
    var el = document.getElementById("cw-msgs");
    if (el) setTimeout(function () { el.scrollTop = el.scrollHeight; }, 50);
  }

  function esc(s) { var d = document.createElement("div"); d.textContent = s || ""; return d.innerHTML; }

  /** Escape HTML, then render **bold**, *italic*, and line breaks.
   *  List markers are normalized first so `* **Label:**` doesn't become `Label:*`. */
  function formatMsg(s) {
    var t = esc(s);
    t = t.replace(/(^|\n)(\s*)[*•]\s+/g, "$1$2• ");
    t = t.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    t = t.replace(/\*([^*\n]+)\*/g, "<em>$1</em>");
    t = t.replace(/\r?\n/g, "<br>");
    return t;
  }

  // ---- Actions ----
  function onOpen() {
    if (!config.is_online) return;
    if (config.require_user_info) {
      var savedFields = getSavedProfileFields();
      if (hasCompleteSavedProfile(savedFields, config.required_fields || {})) {
        showPrechat = false;
        startSession(savedFields);
      } else {
        showPrechat = true;
        render();
      }
      return;
    }
    if (!sessionId && !showPrechat) startSession();
    else if (sessionId) { loadMessages(); subscribeRealtime(); }
  }

  function onPrechatSubmit() {
    clearPrechatErrors();
    var fields = {};
    var nameEl = document.getElementById("cw-name");
    var emailEl = document.getElementById("cw-email");
    var phoneEl = document.getElementById("cw-phone");
    if (nameEl) fields.name = nameEl.value.trim();
    if (emailEl) fields.email = emailEl.value.trim();
    if (phoneEl) fields.phone = phoneEl.value.trim();

    var errors = validatePrechat(fields);
    if (Object.keys(errors).length) {
      showPrechatErrors(errors);
      return;
    }

    saveProfile(fields);
    startSession(fields);
  }

  function startSession(prechatFields) {
    if (!config || !config.is_online) return;
    api("POST", "session/start", {
      widget_uid: effectiveUid,
      visitor_id: getVisitorId(),
      page_url: window.location.href,
      referrer: document.referrer,
      prechat_fields: prechatFields,
    }).then(function (data) {
      if (data.error) return;
      sessionId = data.session_id;
      localStorage.setItem(sessionKey(), sessionId);
      messages = data.messages || [];
      showPrechat = false;
      render();
      subscribeRealtime();
    });
  }

  function onSend() {
    var input = document.getElementById("cw-input");
    if (!input || !input.value.trim() || sending || !config.is_online) return;
    var text = input.value.trim();
    input.value = "";
    sending = true;

    var clientId = "c_" + Date.now();
    messages.push({
      id: "t_" + Date.now(),
      sender_type: "user",
      message_type: "text",
      content: text,
      client_message_id: clientId,
      created_at: new Date().toISOString(),
    });
    render();

    api("POST", "session/" + sessionId + "/message", {
      visitor_id: getVisitorId(),
      text: text,
      client_message_id: clientId,
    }).then(function (data) {
      sending = false;
      if (data.bot_messages && data.bot_messages.length) {
        appendUnique(data.bot_messages);
      }
      render();
    }).catch(function () { sending = false; render(); });
  }

  function loadMessages() {
    api("GET", "session/" + sessionId + "/messages").then(function (data) {
      if (data.messages) { messages = data.messages; render(); }
    });
  }

  function appendUnique(incoming) {
    if (!incoming || !incoming.length) return false;
    var ids = {};
    var clientIds = {};
    messages.forEach(function (m) {
      if (m.id) ids[m.id] = true;
      if (m.client_message_id) clientIds[m.client_message_id] = true;
    });
    var added = false;
    incoming.forEach(function (m) {
      if (m.id && ids[m.id]) return;
      if (m.client_message_id && clientIds[m.client_message_id]) return;
      messages.push(m);
      added = true;
    });
    return added;
  }

  // ---- Realtime (replaces 3s polling) ----
  function subscribeRealtime() {
    if (!sessionId) return;
    if (realtimeChannel) return; // already subscribed
    if (!config || !config.supabase_url || !config.supabase_anon_key) {
      // Credentials missing — silently no-op; agent replies will appear on next open.
      return;
    }
    loadSupabaseLib().then(function (sb) {
      if (!sb || !sb.createClient) return;
      if (!supabaseClient) {
        supabaseClient = sb.createClient(config.supabase_url, config.supabase_anon_key, {
          auth: { persistSession: false, autoRefreshToken: false },
        });
      }
      realtimeChannel = supabaseClient
        .channel("cw-session-" + sessionId)
        .on(
          "postgres_changes",
          { event: "INSERT", schema: "public", table: "chat_widget_messages", filter: "session_id=eq." + sessionId },
          function (payload) {
            if (!payload || !payload.new) return;
            if (appendUnique([payload.new])) render();
          }
        )
        .subscribe();
    }).catch(function () { /* ignore CDN load failures */ });
  }

  function unsubscribeRealtime() {
    if (realtimeChannel && supabaseClient) {
      try { supabaseClient.removeChannel(realtimeChannel); } catch (e) { /* noop */ }
    }
    realtimeChannel = null;
  }

  // Clean up on page unload
  window.addEventListener("beforeunload", unsubscribeRealtime);
})();

export {};