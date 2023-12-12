let nilai = parseInt(prompt("masukan nilai anda"));
if (nilai >= 0 && nilai < 60) {
  document.writeln(`nilai Anda ${nilai} keterangan D`);
} else if (nilai >= 60 && nilai < 70) {
  document.writeln(`nilai Anda ${nilai} keterangan C`);
} else if (nilai >= 70 && nilai < 85) {
  document.writeln(`nilai Anda ${nilai} keterangan B`);
} else if (nilai >= 85 && nilai <= 100) {
  document.writeln(`nilai Anda ${nilai} keterangan A`);
} else {
  document.writeln("nilai yang anda masukan salah");
}
