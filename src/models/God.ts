import { prop, getModelForClass } from '@typegoose/typegoose';

class God {

    @prop({required:true})
    name :string
    
    @prop({required:true})
    represent:string
    
    @prop()
    description :string
    
    @prop()
    picUrl:string
}

const GodModel = getModelForClass(God);
export default GodModel;