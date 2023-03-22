export const rows1 = Array.from({ length: 6 }, (_, index) => ({
  maThietBi: `KIO_0${index + 1}`,
  tenThietBi: "6",
  moTa: "Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu",
  y: "Cập nhật",
}));

rows1[0].maThietBi = "Kế toán"
rows1[1].maThietBi = "Bác sĩ"
rows1[2].maThietBi = "Lễ tân"
rows1[3].maThietBi = "Quản lý"
rows1[4].maThietBi = "Admin"
rows1[5].maThietBi = "Superadmin"


export const rows = Array.from({ length: 100 }, (_, index) => ({
  tendangnhap: `tuyetnguyen@${index + 10}`,
  hoten: "Nguyen Văn A",
  sodienthoai: "0919256712",
  email: "tuyetnguyen123@gmail.com",
  vaitro: "Kế toán",
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
    randomNum < 0.5 ? "Ngưng hoạt động" : "Hoạt động";
  row.trangThaiKetNoi = randomNum2 < 0.5 ? "Mất kết nối" : "Đang kết nối";
});

export const rows2 = Array.from({ length: 100 }, (_, index) => ({
  tendangnhap: `tuyetnguyen@${index + 10}`,
  thoigiantacdong: "01/12/2021 15:12:17",
  ipthuchien: "192.168.3.1",
  thaotacthuchien: "Cập nhật thông tin dịch vụ DV_01",
}));