FactoryBot.define do
  factory :customer do
    age { '30代前半' }
    date { Faker::Date.between(from: 1.year.ago, to: Date.today) }
    time { '12:00' }
    course { '60min' }
    option { true }
    cosplay { false }
    extended_time { '無し' }
    deep_lymph { '無し' }
  end
end
