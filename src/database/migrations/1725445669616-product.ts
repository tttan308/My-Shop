import { type MigrationInterface, type QueryRunner } from 'typeorm';

export class Product1725445669616 implements MigrationInterface {
  name = 'Product1725445669616';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      // eslint-disable-next-line max-len
      `CREATE TABLE "products" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "deleted_by" character varying, "created_by" character varying, "updated_by" character varying, "name" character varying NOT NULL, "description" text, "price" numeric(10,2) NOT NULL, "image_url" character varying, "stock" integer NOT NULL DEFAULT '0', "category" character varying, CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "post_translations" ADD "deleted_at" TIMESTAMP`,
    );
    await queryRunner.query(
      `ALTER TABLE "post_translations" ADD "deleted_by" character varying`,
    );
    await queryRunner.query(
      `ALTER TABLE "post_translations" ADD "created_by" character varying`,
    );
    await queryRunner.query(
      `ALTER TABLE "post_translations" ADD "updated_by" character varying`,
    );
    await queryRunner.query(`ALTER TABLE "posts" ADD "deleted_at" TIMESTAMP`);
    await queryRunner.query(
      `ALTER TABLE "posts" ADD "deleted_by" character varying`,
    );
    await queryRunner.query(
      `ALTER TABLE "posts" ADD "created_by" character varying`,
    );
    await queryRunner.query(
      `ALTER TABLE "posts" ADD "updated_by" character varying`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_settings" ADD "deleted_at" TIMESTAMP`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_settings" ADD "deleted_by" character varying`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_settings" ADD "created_by" character varying`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_settings" ADD "updated_by" character varying`,
    );
    await queryRunner.query(`ALTER TABLE "users" ADD "deleted_at" TIMESTAMP`);
    await queryRunner.query(
      `ALTER TABLE "users" ADD "deleted_by" character varying`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ADD "created_by" character varying`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ADD "updated_by" character varying`,
    );
    await queryRunner.query(
      `ALTER TABLE "post_translations" ALTER COLUMN "created_at" SET DEFAULT ('now'::text)::timestamp(6) with time zone`,
    );
    await queryRunner.query(
      `ALTER TABLE "posts" ALTER COLUMN "created_at" SET DEFAULT ('now'::text)::timestamp(6) with time zone`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_settings" ALTER COLUMN "created_at" SET DEFAULT ('now'::text)::timestamp(6) with time zone`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT ('now'::text)::timestamp(6) with time zone`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT now()`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_settings" ALTER COLUMN "created_at" SET DEFAULT now()`,
    );
    await queryRunner.query(
      `ALTER TABLE "posts" ALTER COLUMN "created_at" SET DEFAULT now()`,
    );
    await queryRunner.query(
      `ALTER TABLE "post_translations" ALTER COLUMN "created_at" SET DEFAULT now()`,
    );
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "updated_by"`);
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "created_by"`);
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "deleted_by"`);
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "deleted_at"`);
    await queryRunner.query(
      `ALTER TABLE "user_settings" DROP COLUMN "updated_by"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_settings" DROP COLUMN "created_by"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_settings" DROP COLUMN "deleted_by"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_settings" DROP COLUMN "deleted_at"`,
    );
    await queryRunner.query(`ALTER TABLE "posts" DROP COLUMN "updated_by"`);
    await queryRunner.query(`ALTER TABLE "posts" DROP COLUMN "created_by"`);
    await queryRunner.query(`ALTER TABLE "posts" DROP COLUMN "deleted_by"`);
    await queryRunner.query(`ALTER TABLE "posts" DROP COLUMN "deleted_at"`);
    await queryRunner.query(
      `ALTER TABLE "post_translations" DROP COLUMN "updated_by"`,
    );
    await queryRunner.query(
      `ALTER TABLE "post_translations" DROP COLUMN "created_by"`,
    );
    await queryRunner.query(
      `ALTER TABLE "post_translations" DROP COLUMN "deleted_by"`,
    );
    await queryRunner.query(
      `ALTER TABLE "post_translations" DROP COLUMN "deleted_at"`,
    );
    await queryRunner.query(`DROP TABLE "products"`);
  }
}
