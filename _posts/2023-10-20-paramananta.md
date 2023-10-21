---
layout: post
title: how to run your first job on paramanata?
date: 2023-10-20 08:00:00-0530
description: a beginner's guide
tags: server
categories: academics
giscus_comments: false
related_posts: false
featured: false
toc:
  sidebar: left
---



## Instructions

You will have to run the below command:


```
sbatch fname.sh
```

and the fname.sh looks like below

```
#!/bin/bash

#SBATCH --job-name=mbert-gpu
#SBATCH --partition=gpu
#SBATCH --gres=gpu:2
#SBATCH --nodes=1                	# Run all processes on a s.node 	 
#SBATCH --ntasks=1               	# Run a single task           	 
#SBATCH --cpus-per-task=32        	# Number of CPU cores per tasks
#SBATCH --time=03:00:00          	# Time limit hrs:min:sec
#SBATCH --output=../logs/mbert_%j.log 	# Standard output and error log

pwd; hostname; date

echo "fine-tuning mbert on $SLURM_CPUS_ON_NODE CPU cores"

python ../py/mbert_param.py

Date
```



**#SBATCH --time=03:00:00**  ⇒ if this time exceeds, your job will terminate immediately, so please give more time in order to avoid termination. *Max-time limit on GPU partition is 2 days*, You can check the time limit of all partitions using command “**sinfo**”

There is a limited amount of storage available per user, it's ~50GB,it may even decrease further as the number of users increases.

In the above .sh file, you can play with the parameters, if any parameter is not correct, then it will throw an error. You can always check the log file.

This is enough to get started.


FOR GPU: there are only two options available here [**#SBATCH --gres=gpu:2**] (it will be only 1 or 2); #GPUs per node (Max. 2).
For a GPU node, it has two GPU cards, each of 16GB.


For submitting the job: 
`sbatch fname.sh`

For checking job queue:
	`squeue`

For terminating the job:
	`scancel job_id [you can get job id from squeue]`

To run a job on a specific node:
	`#SBATCH --nodelist=gpu0xx`

Show specific job details:
	`scontrol show job job_id`
    
    
    
Using the “**sinfo**” command, you can check the partition on which you want to run.


As quoted by admin:
> As per policy at a given instance maximum 6 jobs can be in running state at a time under "GPU" partition within the same group. Rest will be in idle state.

> One group: IITGn, another group: non-IITGn


![squeue](/assets/img/blogs/param.png "squeue command display")


After submitting your job, it can be seen in the job queue, so for user “suraj.k” who is running his job on “gpu002”, he can check his gpu usage after logging into the gpu node; like below.

`ssh gpu002`

After logging into the node, he can run the “nvidia-smi” command. So you can also try it out on your submitted job. You can’t try it out on other users' jobs, you will get permission denied error.


you don't have to make any changes in the python file. Only changes are to be made in the .sh file and we should mention the path of the python file in the .sh file.



## Multi-GPU

```
#!/bin/bash

#SBATCH --job-name=muril-mu-gpu
#SBATCH --partition=gpu
#SBATCH --gres=gpu:1               # GPUs per node (Max. 2)[2]
#SBATCH --nodes=2                  # Run all processes on a multi node       
#SBATCH --ntasks=2                 # Run multi task [4]
#SBATCH --tasks-per-node=1      	  # Tasks per node  [2]          
#SBATCH --cpus-per-task=32      	  # Number of CPU cores per task.
#SBATCH --time=23:00:00            # Time limit hrs:min:sec
#SBATCH --output=../logs/muril_%j.log  # Standard output and error log

pwd; hostname; date

echo "finetuning muril on $SLURM_CPUS_ON_NODE CPU cores"

python ../py/muril_param.py

date

```


1. We have to specify the number of nodes that we want to use: `#SBATCH --nodes=X`
1. We have to specify the amount of GPUs per node (with a limit of 2 GPUs per user): `#SBATCH --gres=gpu:Y`
1. The total number of tasks is equal to the product between the number of nodes and the number of GPUs per node: `#SBATCH --ntasks=X·Y`
1. We have to distribute the number of tasks per node: `#SBATCH --tasks-per-node=(X·Y)/X`


## MPI4PY

If you have to use mpi4py package in your code, then you can put below commands in you .sh file

`#module load spack`
`#source /home/apps/spack/share/spack/setup-env.sh`
`#spack load py-mpi4py@3.1.2 /rhlwd3z`

Or you can individually execute these commands on your terminal one by one.


## Useful Commands

`module avail`
`sacct -u “uname”`

