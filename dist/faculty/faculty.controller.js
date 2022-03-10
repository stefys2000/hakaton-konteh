"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacultyController = void 0;
const common_1 = require("@nestjs/common");
const faculty_service_1 = require("./faculty.service");
const faculty_dto_1 = require("./dto/faculty.dto");
const passport_1 = require("@nestjs/passport");
let FacultyController = class FacultyController {
    constructor(facultyService) {
        this.facultyService = facultyService;
    }
    async getAllFaculties() {
        return await this.facultyService.getAllFaculties();
    }
    async registerFaculty(registerFacultyDto) {
        return await this.facultyService.registerFaculty(registerFacultyDto);
    }
    async updateFaculty(updateFacultyDto) {
        return await this.facultyService.updateFaculty(updateFacultyDto);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FacultyController.prototype, "getAllFaculties", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [faculty_dto_1.RegisterFacultyDto]),
    __metadata("design:returntype", Promise)
], FacultyController.prototype, "registerFaculty", null);
__decorate([
    (0, common_1.Patch)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [faculty_dto_1.UpdateFacultyDto]),
    __metadata("design:returntype", Promise)
], FacultyController.prototype, "updateFaculty", null);
FacultyController = __decorate([
    (0, common_1.Controller)('faculty'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __metadata("design:paramtypes", [faculty_service_1.FacultyService])
], FacultyController);
exports.FacultyController = FacultyController;
//# sourceMappingURL=faculty.controller.js.map