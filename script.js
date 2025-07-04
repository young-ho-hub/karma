function generateContract() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const name = document.getElementById('client-name').value.trim();
  const target = document.getElementById('target').value.trim();
  const method = document.getElementById('method').value.trim();
  const price = document.getElementById('price').value.trim();
  const detail = document.getElementById('detail').value.trim();
  const password = document.getElementById('admin-pass').value.trim();

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(16);
  doc.text("Shadow Contract", 10, 10);

  doc.setFontSize(12);
  doc.setFont("Helvetica", "normal");

  
  if (password === "020822") {
    doc.text("Check the ", 10, 20);
    doc.text("Waiting List:", 10, 30);
    doc.text("- Client: Unknown | Target: Newton | Pay: 3", 10, 40);
    doc.text("- Job : director of Younghwa children's home", 10, 50);
    doc.text("- Check bank account", 10, 60);
    doc.text("- account number: 58890204050307", 10, 70);
    doc.text("- for password, see the picture below.", 10, 80);
    const img = document.getElementById("stamp");
    doc.addImage(img, "PNG", 140, 200, 60, 60); // 오른쪽 하단에 50x50 크기로
    
    doc.save("admin-waitlist.pdf");
    return;
  }

  
  if (password && password !== "020822") {
    alert("Incorrect admin password. Did you submit a contract?");
    return;
  }

  
  if (!name || !target || !method || !price) {
    alert("Please fill in all fields.");
    return;
  }

  doc.text(`Client: ${name}`, 10, 20);
  doc.text(`Target: ${target}`, 10, 30);
  doc.text(`Method: ${method}`, 10, 40);
  doc.text(`Payment: ${price}`, 10, 50);
  doc.text(`Detail: ${detail}`, 10, 60);
  doc.text(`Date: ${new Date().toLocaleDateString()}`, 10, 70);

  const pageHeight = doc.internal.pageSize.height;
  doc.line(20, pageHeight - 30, 80, pageHeight - 30); 
  doc.text("Client Signature", 20, pageHeight - 25);

  doc.line(120, pageHeight - 30, 180, pageHeight - 30); 
  doc.text("Signed by: Mirror", 120, pageHeight - 25);

  doc.save(`contract-${name || "client"}.pdf`);
}
