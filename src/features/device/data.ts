export const rows = Array.from({ length: 100 }, (_, index) => ({
  maThietBi: `KIO_0${index + 1}`,
  tenThietBi: "Kiosk",
  diaChiIP: "192.168.1.10",
  trangThaiHoatDong: "Ngưng hoạt động",
  trangThaiKetNoi: "Mất kết nối",
  dichVuSuDung:
    "Khám tim mạch, Khám Sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát",
  x: "Chi tiết",
  y: "Cập nhật",
}));

rows.forEach((row) => {
  const randomNum = Math.random();
  const randomNum2 = Math.random();
  row.trangThaiHoatDong =
    randomNum < 0.5 ? "Ngưng hoạt động" : "Đang hoạt động";
  row.trangThaiKetNoi = randomNum2 < 0.5 ? "Mất kết nối" : "Đang kết nối";
});

