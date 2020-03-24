import { Category } from './category';
import { BaseModel } from './base';

export interface DeviceType extends BaseModel {
    categoryId?: number;
    category?: Category;
}
