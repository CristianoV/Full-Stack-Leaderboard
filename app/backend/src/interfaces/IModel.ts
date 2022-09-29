import { ModelAttributes, Model } from 'sequelize';

interface IModel<T extends Model> {
  create(obj: ModelAttributes<T>): Promise<T>,
  findOne(where: ModelAttributes<T>): Promise<T>,
}

export default IModel;
