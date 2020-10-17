class CreateCustomers < ActiveRecord::Migration[6.0]
  def change
    create_table :customers do |t|
      t.string :age, null: false
      t.date :date, null: false
      t.time :time, null: false
      t.string :course, null: false
      t.boolean :option, null: false, default: false
      t.boolean :cosplay, null: false, default: false
      t.string :extended_time, null: false
      t.string :deep_lymph, null: false

      t.timestamps
    end
  end
end
