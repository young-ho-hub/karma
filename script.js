function generateContract() {
  const doc = new jspdf.jsPDF();

  const name = document.getElementById('client-name').value.trim();
  const target = document.getElementById('target').value.trim();
  const method = document.getElementById('method').value.trim();
  const price = document.getElementById('price').value.trim();

  if (!name || !target || !method || !price) {
    alert("모든 필드를 입력해주세요.");
    return;
  }

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(16);
  doc.text("🕶️ Shadow Contract", 10, 10);

  doc.setFontSize(12);
  doc.setFont("Helvetica", "normal");
  doc.text(`의뢰인: ${name}`, 10, 30);
  doc.text(`대상: ${target}`, 10, 40);
  doc.text(`수행 방식: ${method}`, 10, 50);
  doc.text(`보수 조건: ${price}`, 10, 60);
  doc.text(`계약 일자: ${new Date().toLocaleDateString()}`, 10, 70);

  doc.save(`shadow-contract-${name}.pdf`);
}
