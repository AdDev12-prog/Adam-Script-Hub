/* ======================================
      Adam Script Hub
====================================== */

document.addEventListener("DOMContentLoaded", () => {

    const contactBtn = document.getElementById("contactButton");
    const popup = document.getElementById("contactPopup");
    const overlay = document.getElementById("overlay");
    const closeBtn = document.getElementById("closePopup");
    const container = document.getElementById("scriptContainer");

    /* ==========================
          Contact Popup
    ========================== */

    function openPopup() {
        popup.classList.add("show");
        overlay.classList.add("show");
    }

    function closePopup() {
        popup.classList.remove("show");
        overlay.classList.remove("show");
    }

    contactBtn.addEventListener("click", openPopup);
    closeBtn.addEventListener("click", closePopup);
    overlay.addEventListener("click", closePopup);

    /* ==========================
            Toast
    ========================== */

    function toast(message) {

        let t = document.getElementById("toast");

        if (!t) {

            t = document.createElement("div");

            t.id = "toast";

            t.style.position = "fixed";
            t.style.bottom = "25px";
            t.style.right = "25px";
            t.style.padding = "14px 20px";
            t.style.background = "#2563eb";
            t.style.color = "white";
            t.style.borderRadius = "12px";
            t.style.fontWeight = "600";
            t.style.opacity = "0";
            t.style.transform = "translateY(20px)";
            t.style.transition = ".25s";
            t.style.zIndex = "9999";

            document.body.appendChild(t);

        }

        t.textContent = message;

        requestAnimationFrame(() => {

            t.style.opacity = "1";
            t.style.transform = "translateY(0px)";

        });

        clearTimeout(window.toastTimer);

        window.toastTimer = setTimeout(() => {

            t.style.opacity = "0";
            t.style.transform = "translateY(20px)";

        }, 1800);

    }

    /* ==========================
          Render Scripts
    ========================== */

    container.innerHTML = "";

    scripts.forEach(item => {

        const card = document.createElement("div");

        card.className = "script-card";

        card.innerHTML = `

            <div class="card-top">

                <div class="card-title">${item.game}</div>

                <div class="badge">${item.badge}</div>

            </div>

            <div class="card-desc">
                ${item.description}
            </div>

            <div class="meta">

                Updated:
                ${item.updated}

            </div>

            <div class="code-box">

                <span class="code-text">

                    ${item.script}

                </span>

                <button class="copy-btn">

                    📋 Copy Script

                </button>

            </div>

        `;

        card.querySelector(".copy-btn").onclick = () => {

            navigator.clipboard.writeText(item.script);

            toast("✅ Script Copied");

        };

        container.appendChild(card);

    });

});