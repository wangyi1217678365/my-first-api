import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity() // 标记这是一个实体类，TypeORM 会自动在数据库建表
export class User {
  @PrimaryGeneratedColumn() // 主键，自增
  id: number;

  @Column({ length: 50 }) // 字符串字段，最大长度 50
  name: string;

  @Column() // 普通字段
  email: string;

  @CreateDateColumn() // 自动记录创建时间
  createTime: Date;
}