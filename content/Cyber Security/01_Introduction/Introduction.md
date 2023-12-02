
# Security introduction

When talking about security it is important to begin with the evaluation of what we need to protect and what are the risks. Here we can find a list of definitions that will be useful later:

- **ASSET**: the set of goods, data, and people needed for an IT service
- **VULNERABILITY**: intrinsic weakness of an asset
- **THREAT**: possible deliberate action or accidental event that can produce the loss of a security property by exploiting a vulnerability it depends upon the specific environment and/or operating conditions
- **ATTACK**: threat occurrence (deliberate action)
- **(NEGATIVE) EVENT**: threat occurrence (accidental event)

### Security in the lifecycle of a system

Once threats and vulnerabilities are acknowledged it is possible to proceed with the development of the product or service.
Security must be taken into account in every phase of the project: at the beginning the risks need to be **assessed** and security **policies** and **procedures** have to be defined. After that the team can check if there is any available **product** that can satisfy the requirements, if this is not the case the next phase consists in **designing** security services and **integrating** them in the code. Once the development phase is concluded **tests** need to be done (preferably by an external **auditor**).
Even if the tests show positive results security needs to be **set-up** correctly (for example creating a new strong password for the home router before the first use). After all these steps the system can go live but it has to be constantly **managed** to keep up with new discoveries.

![[risk_relations.png|400]]

--- 

 - **INCIDENT**: a security event that compromises the integrity, confidentiality, or availability of an information asset
- **(DATA) BREACH**: an incident that results in the disclosure or potential exposure of data
- **(DATA) DISCLOSURE**: a breach for which it was confirmed that data was actually disclosed (not just exposed) to an unauthorized party

![[windowofexposure.png|400]]

In the image above we can see that when a new vulnerability is discovered (which is something that happens extremely frequently) the risk level spikes up and continues increasing slowly until the vendor becomes aware of it. Once this happens the vendor needs a variable amount of time to solve the issue and create a patch. During this period, the only thing that can be done is to update security tools such as IDS (Intrusion Detection System) that can notify the victim in case of an attack. 
Once the vendor releases the patch the risk level starts decreasing faster and returns to the normal level once the patch is installed.

The time between the discovery of the vulnerability and the installation of the patch is called window of exposure.  

## Security principles

- **Security in depth**: multiple layers of security need to be implemented
- **Security by design**: the service has to be designed with security in mind as seen before
- **Security by default**: when there are multiple options available, the secure one need to be set by default
- **Least privilege**: users of the service should have the least amount of privilege that allows them to do their work. This limits the amount of damage that can be done by a user. 
- **Neet-to-know**: similar to the least privilege principle. Users should only know what they need to complete their job. An example of this is the Amazon delivery service: warehouse workers should only know which items has to be packed in a certain box (without knowing who they are for), the bank should know about the amount that has to be payed for a certain order, etc.


## Security properties/services

| Italian                                 | English                           |
| --------------------------------------- | --------------------------------- |
| autenticazione (semplice/mutua)         | (simple/mutual) authentication    |
| autenticazione (della controparte)      | (peer) authentication             |
| autenticazione (dei dati)               | (data/origin) authentication      |
| autorizzazione, controllo degli accessi | authorization, access control     |
| integrità                               | integrity                         |
| riservatezza, confidenzialità           | confidentiality, privacy, secrecy |
| non ripudio                             | non-repudiation                   |
| disponibilità                           | availability                      |
| tracciabilità                           | traceability, accountability      |



### Peer authentication

Peer authentication consists in the action of o
ne or both parts of a communication of proving the other who they are.

#### Single

In single peer authentication only one of the parts has to prove their identity to the other. 

*Example*: the user has to prove its identity to the server before being able to perform some action

#### Mutual

Both parts have to prove their identity to each other.

*Example*: the user has to login (prove its identity) into the bank account but the bank server has to prove the user that it is the real bank.

### Data origin authentication

In this case what has to be authenticated is the data itself and not the user.

*Example*: emails are asynchronous (sender and receiver does not have to be online at the same time) so the email has to be authenticated so that the receiver can be sure where it comes from.

### Non-repudiation

Formal proof (acceptable by a court of justice) that gives undeniable evidence of the data creator, normally it is associated not only to technical aspects but also to a specific procedures performed **voluntarily**.
We (almost) never have non-repudiation with protocols or procedures that perform automatic actions on user's behalf.

### Authorization (access control)

The user need to be authorized to perform a specific action by the owner of the resource or the administrator.

### Privacy (communication)

### Privacy (data, actions, position)

Data that belong to an user, their actions and their position must not be accessible to a third party.

### Integrity (data modification)

Even if a malicious person cannot understand the content of a message/file/etc. it can still modify it (in unpredictable ways) and this might cause problems. Let's imagine a money transfer over a computer network: if someone is able to intercept the payment message, edit it and forward it to the original destination, it might be possible to change the payment amount.

With integrity implemented on the other hand, the malicious person **can still edit** the data but the receiver can detect the change and reject the message.

If we want to prevent data modification we would need to implement **authorization** but this is almost impossible in network communication.

### Integrity (data cancellation/filtering)

This is similar but the message, instead of being edited, is deleted.

### Replay attack

>[!warning] Replay or Reply
>Pay attention to the difference between "**replAy**" (riprodurre, fare di nuovo) and "**reply**" (rispondere, risposta)

Replay attacks consist into recording a specific message between two point and sending it back multiple times to achieve a specific goal (for example record the message of a money transfer and replaying it multiple times to collect more money).

To protect against this kind of attacks the receiver must be able to detect if the received message is a real one or a copy.

## Data protection

For the security properties seen above it is always important to consider three cases of data protection based on "where" that data is:

1) **Data in transit**: when data are transmitted over a communication channel
2) **Data at rest**: when data are stored in a memory device
3) **Data at work**: when data are in RAM for use by a process

Each of these cases poses different problems and requires different solutions (for example when the data is in RAM security has to be implemented in the hardware).

## Enemy analysis

### Where is the enemy (I)

When trying to understand what security procedures need to be implemented, it is important to consider where the "enemy" is located in order to choose the correct countermeasure.

- **Outside our organization**: if we trust the members of our organization we should create a **firewall** (perimeter defense) to be protected from the outside.
- **Outside our organization, with the exception of our partners**: in this case it is necessary to create a VPN (Virtual Private Network) to give access to trusted partners and be protected from the others.
- **Inside our organization**: if we don't trust who is inside the organization the problem is more difficult to solve and a solution could be a LAN (Local Area Network).
- **Everywhere**: This is the most realistic case since the idea of "inside" and "outside" doesn't make sense anymore considering how in today's world we are always connected to some other services. The solution is then to implement **application-level protection** which means that each program cannot rely on other services for protection and **data protection**, in other words we need to create a **ZTA** (Zero Trust Architecture). 

### Where is the enemy (II)

Another way of considering the enemy location is in respect to the two peers A and B who interact in any kind of network communication:

- **MITM (Man-In-The-Middle)**: in this case the enemy is between the two peers.
- **MATE (Man-At-The-End)**: here the enemy is inside one of the peers (for example with remote access to the computer).
- **MITB (Man-In-The-Browser)**: in this case the enemy has access to one specific component of one of the peers (typically the web browser).

### What action can the enemy perform

We can identify two types of attacks: **passive attacks** where the enemy can only read the data between A and B and **active attacks**, where the enemy can also modify, delete or create new data.

## Technological problems

The main issues described here are related to the fact that networks were not created with security in mind:
- Most communications for example are made in clear
- Networks operate in **broadcast** (messages from one peer are send to everybody and, **ideally** only the intended receiver would accept them).
- Geographical connections use shared lines and data passes through third-party routers.
- User authentication is typically weak.
- There is no server authentication.
- Software contains bugs.

## Attacks

>[!info] This list contains a brief explanation of the attacks, for more details see the slides of the course (pages 58-84).

### IP spoofing (masquerading)

In this attack someone uses the IP address of another host to perform (illegal) actions. One example is accessing a server that uses **address based authentication** (which should NEVER be used).

### Packet sniffing (eavesdropping)

In packet sniffing the attacker intercepts messages that are not intended for him. This is very easy to do in broadcast networks since, as stated above, the messages are sent to everyone.

Since it is almost impossible to create non-broadcast networks, the only countermeasure is to **encrypt** the packet payload.

### Denial of Service (DoS)

DoS attacks aim to keep a host busy so that it can't provide its services. The attack consists in sending an excessive amount of request to the server so that it gets saturated and can no longer serve its purpose.

Unfortunately there is no countermeasure to this attack, the only thing that can be done is to monitor the traffic and oversize the server to mitigate the effects of an attack.

### Distributed Denial of Service (DDoS)

Similar to DoS but the requests come from many different hosts (for example computers infected by a virus) to create a **botnet**. Often the bots are controlled by a **master** that coordinates them. 

To improve a DDoS attack the attacker can use a *reflector* to hide its tracks or an *amplification factor* (that relies on specific protocols) to deal a greater damage without needing more bots.

### Shadow/Fake server

In this attack a host shows itself as a service provider without having the rights to do so. In this way it can provide malicious answers to the client.

![[shadow.excalidraw.svg|500]]


The attack can be performed both as shown in the picture above or by manipulating the DNS or routing to redirect the victim to the fake server.

The best countermeasure in this case is server authentication so that the user can verify if it's talking to the real server or not.

### Connection hijacking/MITM/data spoofing

In this attack the attacker takes control of a communication channel to insert, delete or manipulate the traffic. It can be performed as logical or physical Man In The Middle (MITM).

Countermeasures for this attack are implementing secrecy, data authentication, integrity (to detect if data has been modified) and serialization (numbering the packets to detect is something is missing).

It should be noted that **peer authentication is not enough** because the attacker could intervene after the authentication.

### Trojan

A trojan (horse) is a program containing malicious software that could be executed on a user terminal (which are usually less protected than the network).

## Malware

### Definitions

- **Virus**: a piece of software that damages the target, replicates itself and is spread (involuntarily) by humans (for example by using an infected USB drive).
- **Worm**: does not inflict direct damage but can harm the target by saturating its resources. It can propagate automatically across multiple devices.
- **Trojan**: a malware vector.
- **Backdoor**: an authorized access point to a system that could be created or exploited by the attacker.
- **Rootkit**: a set of privileged access tools which could be hidden in the lower level of a host (e.g in the kernel).
- **PUA**: Potentially Unwanted Software, programs which are not dangerous but that were not installed on purpose.

### Virus and worms

Both viruses and worms take advantage of the people to spread. Users could in fact be pushed to install malicious software by stress or ignorance, the system manager could make configuration mistakes and the producer could allow automatic execution of untrusted software.

### Ransomware

Ransomware is a malware whose aim to get a ransom from the user. This is typically achieved by making user data unreadable and asking money for them to be unlocked.

One way to minimize the damage would be to make frequent backups but this **is not enough**. The backup could also be affected by the ransomware since it could already be present on the device when the backup was made. It is important to always check that the backup is readable and to know which is the last good one.

## Non technological problems

There are a lot of problems that are not related to technical issues but to the people that interact with the systems. People usually make mistakes because of ignorance, when stressed or overloaded, etc. Other issues are related to complex user interfaces that may mislead the user or tempt the user into taking unsafe "shortcuts" (such as disabling the anti virus to improve performance).

### Social engineering

Social engineering consists into forcing users to involuntarily partecipate to the attack. Showing acquaintance with the company’s procedures, habits and personnel helps in gaining trust and make the target lower his defenses.

### Phishing

Phishing is the use mail or similar tools to attract a user to a fake (shadow) server to. The goal for the attacker is to acquire their personal data or persuade them to install a plugin or extension (which actually is a virus or a Trojan).

There are two main variants of phishing:

- **Spear phishing**: includes several personal data to disguise the fake message as a good one (e.g. e-mail address, name of Dept/Office, phone number, etc.)
- **Whaling**: in this case the attacker utilizes spear phishing methods to go after a large, high-profile target, such as a CEO or CIO.

#### Fake mail

Faking an email or a SMS is easy, the difficult part is using the right tone to trick the victim. In emails a way to circumvent this problem could be using a previous real email and changing parts of it (for example an attachment). SMS are easier to fake since they are usually shorter.

### Stuxnet attack

The Stuxnet attack is interesting because it is the first known one that targets a cyber-physical system (a system where computers control physical devices). In this case the target was an enrichment plant in Iran. The malware exploited several windows vulnerabilities and was disguised as a driver on a USB drive of a maintenance technician.

The plant relied on physical separation (air gap) for protection but did not implement any other layers (no anti virus, firewall, etc) and had many unnecessary services running. This meant that the virus was able to go unnoticed and spread across the network with ease.

## The three (four) pillars of security

![[pillars of security.excalidraw.svg|400]]