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
exports.DeskController = void 0;
const common_1 = require("@nestjs/common");
const desk_service_1 = require("./desk.service");
const passport_1 = require("@nestjs/passport");
const desk_dto_1 = require("./dto/desk.dto");
let DeskController = class DeskController {
    constructor(deskService) {
        this.deskService = deskService;
    }
    async getAllDesks() {
        return await this.deskService.getAllDesks();
    }
    async getDeskById(id) {
        return await this.deskService.getDeskById(id);
    }
    async getDesksByRoom(deskByRoomDto) {
        return await this.deskService.getDesksByRoom(deskByRoomDto);
    }
    async assignUserToDesk(assignUserDto) {
        return await this.deskService.assignUserToDesk(assignUserDto);
    }
    async registerDesk(registerDeskDto) {
        return await this.deskService.registerDesk(registerDeskDto);
    }
    async updateDesk(updateDeskDto) {
        return await this.deskService.updateDesk(updateDeskDto);
    }
    async deleteDesk(deleteDeskDto) {
        return await this.deskService.deleteDesk(deleteDeskDto);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DeskController.prototype, "getAllDesks", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DeskController.prototype, "getDeskById", null);
__decorate([
    (0, common_1.Get)('room'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [desk_dto_1.DeskByRoomDto]),
    __metadata("design:returntype", Promise)
], DeskController.prototype, "getDesksByRoom", null);
__decorate([
    (0, common_1.Post)('assign'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [desk_dto_1.AssignUserDto]),
    __metadata("design:returntype", Promise)
], DeskController.prototype, "assignUserToDesk", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [desk_dto_1.RegisterDeskDto]),
    __metadata("design:returntype", Promise)
], DeskController.prototype, "registerDesk", null);
__decorate([
    (0, common_1.Patch)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [desk_dto_1.UpdateDeskDto]),
    __metadata("design:returntype", Promise)
], DeskController.prototype, "updateDesk", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [desk_dto_1.DeleteDeskDto]),
    __metadata("design:returntype", Promise)
], DeskController.prototype, "deleteDesk", null);
DeskController = __decorate([
    (0, common_1.Controller)('desk'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __metadata("design:paramtypes", [desk_service_1.DeskService])
], DeskController);
exports.DeskController = DeskController;
//# sourceMappingURL=desk.controller.js.map