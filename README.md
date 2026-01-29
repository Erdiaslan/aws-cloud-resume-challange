Cloud Resume Challenge – Erdi Aslan
==================================

This repository contains my implementation of the Cloud Resume Challenge.
The project demonstrates a production-style, serverless AWS architecture
used to host and operate my resume website.

Live URL:
https://erdiaslan.com


Architecture
------------

User Browser
  -> Route 53 (DNS)
  -> CloudFront (CDN + HTTPS)
  -> S3 (private static website)

Visitor Counter Flow
--------------------

Browser
  -> API Gateway
  -> Lambda (Python)
  -> DynamoDB
  -> Response returned to frontend


AWS Services Used
-----------------

Frontend & Delivery
- Amazon S3 (private origin bucket)
- Amazon CloudFront (CDN, SSL)
- AWS Certificate Manager
- Amazon Route 53

Backend
- Amazon API Gateway
- AWS Lambda (Python)
- Amazon DynamoDB

CI/CD & Observability
- GitHub Actions
- Amazon CloudWatch (logs, metrics, alarms)
- Amazon SNS (email alerts)


Visitor Counter Logic
---------------------

Each page load triggers a GET request to API Gateway.
The Lambda function updates the visitor count atomically
in DynamoDB and returns the updated value to the frontend.

No servers are managed manually.


CI/CD Pipeline
--------------

Frontend deployment is fully automated.

On push to main:
- Static files are synced to S3
- CloudFront cache is invalidated
- Changes are deployed automatically

No manual uploads or console actions are required.


Security Notes
--------------

- S3 bucket is not public (CloudFront OAC)
- HTTPS enforced end-to-end
- IAM roles follow least privilege
- No AWS credentials stored in source control


Purpose
-------

This project was built to gain hands-on experience with:
- Serverless AWS architectures
- Infrastructure automation
- CI/CD pipelines
- Cloud security best practices

It also serves as a practical demonstration of my cloud skills.


Author
------

Erdi Aslan
Cloud / DevOps Engineer

GitHub:   https://github.com/Erdiaslan
LinkedIn: https://www.linkedin.com/in/erdiaslan-073a99211/
