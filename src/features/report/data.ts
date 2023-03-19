export const rows = Array.from({ length: 100 }, (_, index) => ({
    soThuTu: `${2010000 + index}`,
    tenKhachHang: "Lê Huỳnh Ái Vân",
    moTa: "Hoạt động",
    tenDichVu: "Khám tim mạch",
    thoigiancap: "14:35 - 07/11/2021",
    hansudung: "14:35 - 12/11/2021",
    trangThai: "Chi tiết",
    nguonCap: "Cập nhật",
    x: "Chi tiết",
  }));
  
  rows.forEach((row) => {
    const randomNum = Math.random();
    const randomNum2 = Math.random();
    row.trangThai =
      randomNum < 0.5 ? "Đang chờ" : "Đã sử dụng";
    row.nguonCap = randomNum2 < 0.5 ? "Kiosk" : "Hệ thống";
  });
  