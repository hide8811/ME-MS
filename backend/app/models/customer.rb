class Customer < ApplicationRecord
  with_options presence: true do
    validates :age
    validates :date
    validates :time
    validates :course
    validates :extended_time
    validates :deep_lymph
  end

  validates :option, inclusion: { in: [true, false] }
  validates :cosplay, inclusion: { in: [true, false] }

  with_options if: :option_false? do
    validates :cosplay, format: { with: /\Afalse\z/ }
    validates :extended_time, format: { with: /\A--\z/ }
    validates :deep_lymph, format: { with: /\A--\z/ }
  end

  def option_false?
    option == false
  end
end
