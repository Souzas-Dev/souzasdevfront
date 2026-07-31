const menuButton =
  document.querySelector("#menu-button");

const navigation =
  document.querySelector("#navigation");

const header =
  document.querySelector("#header");

const scrollProgress =
  document.querySelector("#scroll-progress");

const currentYear =
  document.querySelector("#current-year");

function setMenuState(isOpen) {
  if (!menuButton || !navigation) {
    return;
  }

  navigation.classList.toggle(
    "active",
    isOpen
  );

  menuButton.classList.toggle(
    "active",
    isOpen
  );

  document.body.classList.toggle(
    "menu-open",
    isOpen
  );

  menuButton.setAttribute(
    "aria-expanded",
    String(isOpen)
  );

  menuButton.setAttribute(
    "aria-label",
    isOpen
      ? "Fechar menu"
      : "Abrir menu"
  );
}

function toggleMenu() {
  if (!navigation) {
    return;
  }

  setMenuState(
    !navigation.classList.contains("active")
  );
}

function closeMenu({
  restoreFocus = false
} = {}) {
  setMenuState(false);

  if (
    restoreFocus &&
    menuButton
  ) {
    menuButton.focus();
  }
}

function handleMenuKeydown(event) {
  if (
    event.key === "Escape" &&
    navigation?.classList.contains("active")
  ) {
    closeMenu({
      restoreFocus: true
    });
  }
}

function handleOutsidePointer(event) {
  if (
    !navigation ||
    !menuButton ||
    !navigation.classList.contains("active") ||
    !(event.target instanceof Node)
  ) {
    return;
  }

  if (
    navigation.contains(event.target) ||
    menuButton.contains(event.target)
  ) {
    return;
  }

  closeMenu();
}

function handleResize() {
  if (
    window.innerWidth > 820 &&
    navigation?.classList.contains("active")
  ) {
    closeMenu();
  }

  updateHeader();
}

function updateHeader() {
  const scrollTop =
    window.scrollY;

  if (header) {
    header.classList.toggle(
      "scrolled",
      scrollTop > 20
    );
  }

  if (!scrollProgress) {
    return;
  }

  const availableHeight =
    document.documentElement.scrollHeight -
    window.innerHeight;

  const progress =
    availableHeight > 0
      ? (scrollTop / availableHeight) * 100
      : 0;

  scrollProgress.style.width =
    `${Math.min(progress, 100)}%`;
}

function initializePage() {
  if (currentYear) {
    currentYear.textContent =
      new Date().getFullYear();
  }

  if (
    menuButton &&
    navigation
  ) {
    menuButton.addEventListener(
      "click",
      toggleMenu
    );

    navigation
      .querySelectorAll("a")
      .forEach((link) => {
        link.addEventListener(
          "click",
          () => closeMenu()
        );
      });

    document.addEventListener(
      "keydown",
      handleMenuKeydown
    );

    document.addEventListener(
      "pointerdown",
      handleOutsidePointer
    );
  }

  window.addEventListener(
    "scroll",
    updateHeader,
    {
      passive: true
    }
  );

  window.addEventListener(
    "resize",
    handleResize,
    {
      passive: true
    }
  );

  updateHeader();
}

initializePage();
