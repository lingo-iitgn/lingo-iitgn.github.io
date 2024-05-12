# Lingo Research Group @ IIT Gandhinagar


### Installation


```bash
$ git clone git@github.com:<your-username>/<your-repo-name>.git
$ cd <your-repo-name>
```

---

#### Local setup using Docker (Recommended)
Using Docker to install Jekyll and Ruby dependencies is the easiest way.

- First, install [docker](https://docs.docker.com/get-docker/) and [docker-compose](https://docs.docker.com/compose/install/).
- Finally, run the following command that will pull the latest pre-built image from DockerHub and will run your website.

```bash
$ docker compose up
```

Note that when you run it for the first time, it will download a docker image of size 400MB or so. 

Now, feel free to customize the theme however you like (don't forget to change the name!). After you are done, you can use the same command (`docker compose up`) to render the webpage with all you changes. Also, make sure to commit your final changes.

---
