class CreateCustomers < ActiveRecord::Migration[6.0]
  def change
    create_table :customers do |t|
      t.string :age
      t.date :date
      t.time :time
      t.string :course
      t.boolean :option
      t.boolean :cosplay
      t.string :extended_time
      t.string :deep_lymph

      t.timestamps
    end
  end
end
