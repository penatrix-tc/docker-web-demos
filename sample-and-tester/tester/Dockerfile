FROM topcoder/tc-automated-tester

COPY project /project/src/project

# Ensure that the post container create script is an executable
RUN ["chmod", "+x", "/project/src/project/init-src.sh"]

# Initialize the folder where tests will run - call a script that does this
ENTRYPOINT ["/project/src/project/init-src.sh"]
