begin;

-- Insert rows into table 'projects'
INSERT INTO projects
( -- columns to insert data into
 id, name
)
VALUES
( -- first row: values for the columns in the list above
 1, 'Project Test'
);

-- Insert rows into table 'categories'
INSERT INTO categories
( -- columns to insert data into
 id, name, project_id
)
VALUES
( -- first row: values for the columns in the list above
 1, 'To Do', 1
),
( -- first row: values for the columns in the list above
 2, 'Doing', 1
),
( -- first row: values for the columns in the list above
 3, 'Done', 1
);

-- Insert rows into table 'tasks'
INSERT INTO tasks
( -- columns to insert data into
 id, name, project_id, category_id
)
VALUES
( -- first row: values for the columns in the list above
 1, 'Exercise more', 1, 1
),
( -- first row: values for the columns in the list above
 2, 'Reap', 1, 1
),
( -- first row: values for the columns in the list above
 3, 'Sleep consistently', 1, 1
),
( -- first row: values for the columns in the list above
 4, 'Exercise', 1, 2
),
( -- first row: values for the columns in the list above
 5, 'Sow', 1, 2
),
( -- first row: values for the columns in the list above
 6, 'Sleep', 1, 2
),
( -- first row: values for the columns in the list above
 7, 'Exercise some', 1, 3
),
( -- first row: values for the columns in the list above
 8, 'Turned 20', 1, 3
),
( -- first row: values for the columns in the list above
 9, 'Turned 30', 1, 3
);

commit;