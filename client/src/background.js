export const initBackground = () => {
    const vantaElement = document.querySelector('#vanta-bg');
    if (!vantaElement) return;

    // We use window.VANTA to avoid linting/import issues in Vite
    if (window.VANTA && window.VANTA.GLOBE) {
        window.VANTA.GLOBE({
            el: "#vanta-bg",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0xfae6ff,
            backgroundColor: 0x050505, // Match our dark background
            size: 0.80
        });
    } else {
        console.error("Vanta or Vanta.GLOBE not found. Make sure scripts are loaded correctly.");
    }
};
