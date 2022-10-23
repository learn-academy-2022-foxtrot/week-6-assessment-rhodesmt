# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: (un)Fortunately, I happened across this same issue with my wildlife tracker I was building, but never fret! You can run $ rails db:rollback to undo your most recent rails migration and redo your rails g statement for the model. You can then add-in your foreign key into the rails g and run the migration. You should now be able to add has_many :students in cohort.rb and belongs_to :cohort in students.rb.

Researched answer: The foreign key would be need to be with the student model so that it can be referenced in within the Cohort model. It would look like student_id:

2. Which RESTful routes must always be passed params? Why?

Your answer: The RESTful routes that must be passed params are show, edit, update, and destroy.
put/patch '/resources/:id' => 'resource#update' 

Researched answer: The show, edit, update, and destroy routes require params because it is a route that is altering the existing database.

3. Name three rails generator commands. What is created by each?

Your answer: 
$ rails g model Model- generates a new rails model
$ rails g controller Controller- generates a new controller for the requested model
$ rails g migration - generates a new migration file for the app

Researched answer: The generator commands are necessary to building out a functional rails act. Alternatively to doing these, you can also use $ rails g resource App that will automatically create the route, controller, and model without the need for inputting separate commands.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
Would call the students action within the controller. Would get all of the students within the database.
action: "POST" location: /students
Would call the students action and show the students within the database to the user
action: "GET" location: /students/new
Would call the new action from the student controller. Would show the new student page to the user.
action: "GET" location: /students/2
Would call the student_id:2 and display that students information to the user
action: "GET" location: /students/2/edit
Would call the edit action within the students controller to edit the information for student_id:2 within the database.
action: "PATCH" location: /students/2
Would submit the edit action called to edit the student_id:2 information and make the changes within the database
action: "DELETE" location: /students/2
Would call the delete action within the students controller and delete student_id:2 from the database
5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).
- As a user, I can see a home landing page 
- As a user, I can input information into the search bar
- As a user, I can create an account
- As a user, I can create a blog post
- As a user, I can edit blog posts
- As a user, I can add pictures
- As a user, I can delete pictures
- As a user, I can search other blog posts
- As a user, I can add friends
- As a user, I can delete friends
