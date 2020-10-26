class CustomersController < ApplicationController
  def index
    @customers = Customer.by_month(params[:year])
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

  def show
    @customer = Customer.find(params[:id])
    render json: @customer
  end

  def month_search
    @customers = Customer.search_all_month(params[:month])
    render json: @customers
  end

  private

  def customer_params
    params.require(:customer).permit(:age, :date, :time, :course, :option, :cosplay, :extended_time, :deep_lymph)
  end
end
