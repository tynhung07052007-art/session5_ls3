const rawData = "BS.nguyen_van_hai-KHOA_TIM_MACH-08:30-PHONG_302";

// Tách chuỗi thành các phần
const data = rawData.split("-");

// Lấy thông tin
const rawDoctorName = data[0];
const rawDepartment = data[1];
const appointmentTime = data[2];
const rawRoom = data[3];

// Chuẩn hóa tên bác sĩ
const doctorName = rawDoctorName
    .replace("BS.", "")
    .replaceAll("_", " ")
    .toLowerCase();

const nameParts = doctorName.split(" ");

const doctorFirstName =
    nameParts[0].slice(0, 1).toUpperCase() +
    nameParts[0].slice(1);

const doctorMiddleName =
    nameParts[1].slice(0, 1).toUpperCase() +
    nameParts[1].slice(1);

const doctorLastName =
    nameParts[2].slice(0, 1).toUpperCase() +
    nameParts[2].slice(1);

const formattedDoctorName =
    doctorFirstName + " " +
    doctorMiddleName + " " +
    doctorLastName;

// Chuẩn hóa chuyên khoa
const department = rawDepartment
    .replaceAll("_", " ")
    .toLowerCase();

const formattedDepartment =
    department.slice(0, 1).toUpperCase() +
    department.slice(1, 5) +
    department.slice(5, 6).toUpperCase() +
    department.slice(6, 10) +
    department.slice(10, 11).toUpperCase() +
    department.slice(11);

// Chuẩn hóa phòng khám
const roomNumber = rawRoom.slice(6);
const formattedRoom = "Phòng " + roomNumber;

// In bảng phân công
console.log(`
========================================
       PHÂN CÔNG CA KHÁM
========================================
Bác sĩ       : ${formattedDoctorName}
Chuyên khoa  : ${formattedDepartment}
Giờ khám     : ${appointmentTime}
Phòng khám   : ${formattedRoom}
========================================
`);