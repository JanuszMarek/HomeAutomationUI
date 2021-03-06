import { Producer } from './producer';
import { DeviceType } from './device-type';
import { BaseModel } from './base';

export interface Device extends BaseModel {
    producer?: Producer;
    deviceType?: DeviceType;
    producerId?: number;
    deviceTypeId?: number;
}
