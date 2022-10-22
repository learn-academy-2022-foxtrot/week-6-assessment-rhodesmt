# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) Establishes a child blog controller BlogPostsController and defines new index
class BlogPostsController < ApplicationController
  def index
    # ---2) Sets index to @posts set to BlogsPost.all
    @posts = BlogPost.all
  end

  # ---3) Defines a show method that will display to the user the specific blog post based on the param id for an individual blog post
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) Establishes a new method for the user to make a new blog post and adds the new post to the existing blog class.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) Allows the new post to be created and saved to the database as long as the new post passes the params check. If it is valid, then the user is redirected to the new page displaying the post.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6) Establishes an edit method that would allow the user to edit an existing blog post based on the params id.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) Once a post has been edited, if valid, pushes the updated file to the database and redirects to the updated blog post.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8) Allows user to delete an existing blog post based on the param id and redirects the user back to the blog posts page.
      redirect_to blog_posts_path
    end
  end

  # ---9)
  private
  def blog_post_params
    # ---10)
    params.require(:blog_post).permit(:title, :content)
  end
end
