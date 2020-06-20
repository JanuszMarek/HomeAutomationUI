import { Logo } from './logo';

export interface BaseModel {
    id?: number;
    name?: string;
    description?: string;
    imageUrl?: string;
    imageId?: number;

    rowVersion?: string;
    createDate?: Date;
    updateDate?: Date;
}
