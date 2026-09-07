export function initEdgeAICameraCanvas(canvasId, cameraAngle) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let animationFrameId;

  // Set canvas dimension
  canvas.width = 480;
  canvas.height = 270;

  // Simulated objects for bounding box animations
  const objects = [
    { label: 'POTHOLE', conf: 94, x: 180, y: 160, w: 90, h: 50, color: '#ef4444' },
    { label: 'VEHICLE', conf: 91, x: 280, y: 110, w: 120, h: 80, color: '#3b82f6' },
    { label: 'PEDESTRIAN', conf: 88, x: 60, y: 120, w: 45, h: 95, color: '#10b981' }
  ];

  let step = 0;

  function render() {
    step += 0.05;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw simulated camera background gradient
    const bgGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    bgGradient.addColorStop(0, '#1e293b');
    bgGradient.addColorStop(1, '#0f172a');
    ctx.fillStyle = bgGradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw grid perspective lines simulating road camera feed
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.lineWidth = 1;
    for (let i = 0; i < canvas.width; i += 40) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, canvas.height);
      ctx.stroke();
    }

    // Camera title overlay
    ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
    ctx.fillRect(10, 10, 140, 24);
    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 11px "JetBrains Mono", monospace';
    ctx.fillText(`CAM // ${cameraAngle.toUpperCase()}`, 18, 26);

    // Draw AI Bounding Boxes
    objects.forEach((obj, idx) => {
      // Subtle float movement simulation
      const offsetY = Math.sin(step + idx) * 3;
      const x = obj.x;
      const y = obj.y + offsetY;

      // Box outline
      ctx.strokeStyle = obj.color;
      ctx.lineWidth = 2;
      ctx.strokeRect(x, y, obj.w, obj.h);

      // Corner Accents
      const corner = 6;
      ctx.fillStyle = obj.color;
      ctx.fillRect(x - 1, y - 1, corner, 2);
      ctx.fillRect(x - 1, y - 1, 2, corner);
      ctx.fillRect(x + obj.w - corner, y - 1, corner, 2);
      ctx.fillRect(x + obj.w - 1, y - 1, 2, corner);

      // Tag Label Background
      ctx.fillStyle = obj.color;
      ctx.fillRect(x, y - 18, ctx.measureText(`${obj.label} ${obj.conf}%`).width + 12, 18);

      // Tag Text
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 10px "JetBrains Mono", monospace';
      ctx.fillText(`${obj.label} ${obj.conf}%`, x + 6, y - 5);
    });

    // Bottom Timestamp overlay
    const timeStr = new Date().toLocaleTimeString();
    ctx.fillStyle = 'rgba(0,0,0,0.6)';
    ctx.fillRect(10, canvas.height - 28, 160, 20);
    ctx.fillStyle = '#94a3b8';
    ctx.font = '10px "JetBrains Mono", monospace';
    ctx.fillText(`${timeStr} • 30 FPS`, 16, canvas.height - 15);

    animationFrameId = requestAnimationFrame(render);
  }

  render();

  return () => {
    cancelAnimationFrame(animationFrameId);
  };
}
