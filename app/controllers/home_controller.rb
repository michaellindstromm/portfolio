class HomeController < ApplicationController
  def index
    @contact = Home.new(params[:home])
  end

  def create
    puts "hello"
    @contact = Home.new(params[:home])
    @contact.request = request
    respond_to do |format|
      if @contact.deliver
        @contact = Home.new
        format.html { render 'index' }
        format.js   { flash.now[:success] = @message = "Thank you for your message. I'll get back to you soon!" }
      else
        format.html { render 'index' }
        format.js   { flash.now[:error] = @message = "Message did not send." }
      end
    end
  end


  private
    def home_params

      params.require(:home).permit(:name, :email, :message)

    end

end
