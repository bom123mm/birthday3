function showMessage() {
  document.getElementById('secret').style.display = 'block';
}
const ctx = new AudioContext();
// ตั้ง nodes ...
btn.addEventListener('click', () => {
  ctx.resume().then(() => {
    audio.muted = false;
    audio.play();
  });
});
window.onload = () => {
  const audio = document.getElementById('bgAudio');
  const btn = document.getElementById('playBtn');

  // พยายามเล่นเงียบ ๆ เพื่อ bypass policy
  audio.play().catch(e => console.log('Muted play blocked:', e));

  btn.addEventListener('click', () => {
    audio.muted = false;         // ปลด mute ก่อน
    audio.play().catch(err => console.log('Play failed:', err));
    btn.style.display = 'none';
  });
};

