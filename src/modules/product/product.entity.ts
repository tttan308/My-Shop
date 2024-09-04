import { Column, Entity } from 'typeorm';

import { AbstractEntity } from '../../common/abstract.entity';

@Entity({ name: 'posts' })
export class PostEntity extends AbstractEntity {
  @Column({ type: 'varchar', nullable: false })
  title!: string;

  @Column({ type: 'text', nullable: false })
  content!: string;

  @Column({ nullable: true, type: 'varchar' })
  imageUrl!: string | null;

  @Column({ nullable: true, type: 'varchar' })
  category!: string | null;
}
