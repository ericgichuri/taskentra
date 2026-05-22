from flask import Blueprint, jsonify, render_template

tasks_bp = Blueprint('tasks', __name__)

@tasks_bp.route('/tasks')
def task_list():
    return render_template('tasks/task_list.html')

@tasks_bp.route('/task/viewtask/<taskid>',methods=["GET","POST"])
def view_task(taskid):
    return render_template('tasks/view_task.html')