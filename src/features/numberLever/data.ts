export const rows = Array.from({ length: 90 }, (_, index) => ({
    soThuTu: `${2010000 + index}`,
    tenKhachHang: `Lê Huỳnh Ái Vân ${index}`,
    moTa: "Hoạt động",
    tenDichVu: "Khám tim mạch",
    thoigiancap: "14:35 - 07/11/2021",
    hansudung: "14:35 - 12/11/2021",
    trangThai: "Chi tiết",
    nguonCap: "Cập nhật",
    x: "Chi tiết",
    email: `${index}nguyendung@gmail.com`,
    sdt: '0948523623',
  }));
  
  rows.forEach((row) => {
    const randomNum = Math.random();
    const randomNum2 = Math.random();
    row.trangThai =
      randomNum < 0.3 ? "Đang chờ" : randomNum > 0.3 && randomNum < 0.6 ? "Đã sử dụng" : 'Bỏ qua';
    row.nguonCap = randomNum2 < 0.5 ? "Kiosk" : "Hệ thống";
  });
