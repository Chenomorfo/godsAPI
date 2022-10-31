import { prop, getModelForClass } from '@typegoose/typegoose';
//import mongoose, { ObjectId } from 'mongoose';

class Myth {

    @prop({required:true})
    name :string
    
    @prop({required:true})
    kingdom:string

    @prop()
    represent:string
    
    @prop()
    description :string
    
    @prop()
    picUrl:string

}

const MythModel = getModelForClass(Myth);
export default MythModel;