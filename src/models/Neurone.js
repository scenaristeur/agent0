import { Model, FieldType} from 'soukai';

export { Neurone }
class Neurone extends Model {

  static fields = {
    //context: FieldType.Object,
    name: FieldType.String,
    id: FieldType.Key,

    // neurones: {
    //   type: FieldType.Array,
    //   items: Neurone
    //   //items: FieldType.String,
    // },
    // synapses: {
    //   type: FieldType.Array,
    //   items: FieldType.String,
    // },

  };
  neuroneRelationship() {
      return this.hasMany(Neurone, 'id');
  }

}
