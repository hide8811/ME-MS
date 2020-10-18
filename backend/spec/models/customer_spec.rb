require 'rails_helper'

RSpec.describe Customer, type: :model do
  shared_examples '有効であること' do
    it { expect(customer).to be_valid }
  end

  context '全てに値がある場合' do
    let(:customer) { build(:customer) }
    it_behaves_like '有効であること'
  end

  describe 'column: age' do
    context '値がある場合' do
      let(:customer) { build(:customer, age: '30代後半') }
      it_behaves_like '有効であること'
    end

    context '値がない場合' do
      it '無効であること' do
        customer = build(:customer, age: '')
        customer.valid?
        expect(customer.errors[:age]).to include "can't be blank"
      end
    end
  end

  describe 'column: date' do
    context '値がある場合' do
      let(:customer) { build(:customer, date: '2000-10-14') }
      it_behaves_like '有効であること'
    end

    context '値がない場合' do
      it '無効であること' do
        customer = build(:customer, date: '')
        customer.valid?
        expect(customer.errors[:date]).to include "can't be blank"
      end
    end
  end

  describe 'column: time' do
    context '値がある場合' do
      let(:customer) { build(:customer, time: '12:00') }
      it_behaves_like '有効であること'
    end

    context '値がない場合' do
      it '無効であること' do
        customer = build(:customer, time: '')
        customer.valid?
        expect(customer.errors[:time]).to include "can't be blank"
      end
    end
  end

  describe 'column: course' do
    context '値がある場合' do
      let(:customer) { build(:customer, course: '90min') }
      it_behaves_like '有効であること'
    end

    context '値がない場合' do
      it '無効であること' do
        customer = build(:customer, course: '')
        customer.valid?
        expect(customer.errors[:course]).to include "can't be blank"
      end
    end
  end

  describe 'column: option' do
    context 'trueの場合' do
      let(:customer) { build(:customer, option: true) }
      it_behaves_like '有効であること'
    end

    context 'falseの場合' do
      let(:customer) { build(:customer, option: false) }
      it_behaves_like '有効であること'
    end

    context 'nilの場合' do
      it '無効であること' do
        customer = build(:customer, option: nil)
        customer.valid?
        expect(customer.errors[:option]).to include 'is not included in the list'
      end
    end
  end

  describe 'column: cosplay' do
    context '[option]が[true]の場合' do
      context 'trueの場合' do
        let(:customer) { build(:customer, option: true, cosplay: true) }
        it_behaves_like '有効であること'
      end

      context 'falseの場合' do
        let(:customer) { build(:customer, option: true, cosplay: false) }
        it_behaves_like '有効であること'
      end

      context 'nilの場合' do
        it '無効であること' do
          customer = build(:customer, option: true, cosplay: nil)
          customer.valid?
          expect(customer.errors[:cosplay]).to include 'is not included in the list'
        end
      end
    end

    context '[option]が[false]の場合' do
      context 'trueの場合' do
        it '無効であること' do
          customer = build(:customer, option: false, cosplay: true)
          customer.valid?
          expect(customer.errors[:cosplay]).to include 'is invalid'
        end
      end

      context 'falseの場合' do
        let(:customer) { build(:customer, option: false, cosplay: false) }
        it_behaves_like '有効であること'
      end

      context 'nilの場合' do
        it '無効であること' do
          customer = build(:customer, option: false, cosplay: nil)
          customer.valid?
          expect(customer.errors[:cosplay]).to include 'is not included in the list'
        end
      end
    end
  end

  describe 'column: extended_time' do
    context '[option]が[true]の場合' do
      context '値が"--"である場合' do
        let(:customer) { build(:customer, option: true, extended_time: '--') }
        it_behaves_like '有効であること'
      end

      context '値が"--"以外である場合' do
        let(:customer) { build(:customer, option: true, extended_time: '30min') }
        it_behaves_like '有効であること'
      end

      context '値がない場合' do
        it '無効であること' do
          customer = build(:customer, option: true, extended_time: '')
          customer.valid?
          expect(customer.errors[:extended_time]).to include "can't be blank"
        end
      end
    end

    context '[option]が[false]の場合' do
      context '値が"--"である場合' do
        let(:customer) { build(:customer, option: false, extended_time: '--') }
        it_behaves_like '有効であること'
      end

      context '値が"--"以外である場合' do
        it '無効であること' do
          customer = build(:customer, option: false, extended_time: '30min')
          customer.valid?
          expect(customer.errors[:extended_time]).to include 'is invalid'
        end
      end

      context '値がない場合' do
        it '無効であること' do
          customer = build(:customer, option: false, extended_time: '')
          customer.valid?
          expect(customer.errors[:extended_time]).to include "can't be blank"
        end
      end
    end
  end

  describe 'column: deep_lymph' do
    context '[option]が[true]の場合' do
      context '値が"--"である場合' do
        let(:customer) { build(:customer, option: true, deep_lymph: '--') }
        it_behaves_like '有効であること'
      end

      context '値が"--"以外である場合' do
        let(:customer) { build(:customer, option: true, deep_lymph: '30min') }
        it_behaves_like '有効であること'
      end

      context '値がない場合' do
        it '無効であること' do
          customer = build(:customer, option: true, deep_lymph: '')
          customer.valid?
          expect(customer.errors[:deep_lymph]).to include "can't be blank"
        end
      end
    end

    context '[option]が[false]の場合' do
      context '値が"--"である場合' do
        let(:customer) { build(:customer, option: false, deep_lymph: '--') }
        it_behaves_like '有効であること'
      end

      context '値が"--"以外である場合' do
        it '無効であること' do
          customer = build(:customer, option: false, deep_lymph: '30min')
          customer.valid?
          expect(customer.errors[:deep_lymph]).to include 'is invalid'
        end
      end

      context '値がない場合' do
        it '無効であること' do
          customer = build(:customer, option: false, deep_lymph: '')
          customer.valid?
          expect(customer.errors[:deep_lymph]).to include "can't be blank"
        end
      end
    end
  end
end
