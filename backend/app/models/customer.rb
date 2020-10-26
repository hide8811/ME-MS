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

  def self.by_month(year)
    customers = where(date: Date.new(year.to_i).all_year)
    customers_by_month = {}

    12.times do |n|
      n += 1
      month = Date.new(year.to_i, n).strftime('%B')
      customers_by_month.store(month, customers.select { |c| c[:date].to_date.strftime('%B') == month })
    end

    customers_by_month
  end

  def self.search_all_month(search_month)
    search_date = "#{search_month}-01"
    where(date: search_date.to_date.all_month)
  end
end
