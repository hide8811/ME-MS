class CustomersController < ApplicationController
  def index
    @customers = Customer.all
    render json: @customers
  end

  def create
    @customer = Customer.new(customer_params)

    if @customer.save
      render json: @customer, status: :created
    else
      render json: @customer, status: :unprocessable_entity
    end
  end

  def show; end

  private

  def customer_params
    params.require(:customer).permit(:age, :date, :time, :course, :option, :cosplay, :extended_time, :deep_lymph)
  end
end
