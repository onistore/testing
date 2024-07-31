function triggerKeyEvent(key, isKeyDown) {
  const event = new KeyboardEvent(isKeyDown ? 'keydown' : 'keyup', { key });
  window.dispatchEvent(event);
}

// Add event listeners to control buttons
document.getElementById('btnW').addEventListener('mousedown', () => triggerKeyEvent('w', true));
document.getElementById('btnW').addEventListener('mouseup', () => triggerKeyEvent('w', false));

document.getElementById('btnA').addEventListener('mousedown', () => triggerKeyEvent('a', true));
document.getElementById('btnA').addEventListener('mouseup', () => triggerKeyEvent('a', false));

document.getElementById('btnS').addEventListener('mousedown', () => triggerKeyEvent('s', true));
document.getElementById('btnS').addEventListener('mouseup', () => triggerKeyEvent('s', false));

document.getElementById('btnD').addEventListener('mousedown', () => triggerKeyEvent('d', true));
document.getElementById('btnD').addEventListener('mouseup', () => triggerKeyEvent('d', false));

document.getElementById('btnSpace').addEventListener('mousedown', () => triggerKeyEvent(' ', true));
document.getElementById('btnSpace').addEventListener('mouseup', () => triggerKeyEvent(' ', false));

document.getElementById('btnArrowUp').addEventListener('mousedown', () => triggerKeyEvent('ArrowUp', true));
document.getElementById('btnArrowUp').addEventListener('mouseup', () => triggerKeyEvent('ArrowUp', false));

document.getElementById('btnArrowDown').addEventListener('mousedown', () => triggerKeyEvent('ArrowDown', true));
document.getElementById('btnArrowDown').addEventListener('mouseup', () => triggerKeyEvent('ArrowDown', false));

document.getElementById('btnArrowLeft').addEventListener('mousedown', () => triggerKeyEvent('ArrowLeft', true));
document.getElementById('btnArrowLeft').addEventListener('mouseup', () => triggerKeyEvent('ArrowLeft', false));

document.getElementById('btnArrowRight').addEventListener('mousedown', () => triggerKeyEvent('ArrowRight', true));
document.getElementById('btnArrowRight').addEventListener('mouseup', () => triggerKeyEvent('ArrowRight', false));
