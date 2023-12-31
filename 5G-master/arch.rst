Chapter 3:  Basic Architecture
==============================

This chapter identifies the main architectural components of cellular
access networks. It focuses on the components that are common to both 4G
and 5G and, as such, establishes a foundation for understanding the
advanced features of 5G presented in later chapters.

This overview is partly an exercise in introducing 3GPP terminology. For
someone that is familiar with the Internet, this terminology can seem
arbitrary (e.g., “eNB” is a “base station”), but it is important to keep
in mind that this terminology came out of the 3GPP standardization
process, which has historically been concerned about telephony and
almost completely disconnected from the IETF and other Internet-related
efforts. To further confuse matters, the 3GPP terminology often changes
with each generation (e.g., a base station is called eNB in 4G and gNB
in 5G). We address situations like this by using generic terminology
(e.g., base station), and referencing the 3GPP-specific counterpart only
when the distinction is helpful.

.. _reading_terminology:
.. admonition:: Further Reading
		
   This example is only the tip of the terminology iceberg. For a
   slightly broader perspective on the complexity of terminology in
   5G, see Marcin Dryjanski’s blog post: `LTE and 5G Differences:
   System Complexity
   <https://www.grandmetric.com/blog/2018/07/14/lte-and-5g-differences-system-complexity/>`__.
   July 2018.

3.1 Main Components
-------------------

The cellular network provides wireless connectivity to devices that are
on the move. These devices, which are known as *User Equipment (UE)*,
have traditionally corresponded to smartphones and tablets, but will
increasingly include cars, drones, industrial and agricultural machines,
robots, home appliances, medical devices, and so on.

.. _fig-cellular:
.. figure:: figures/Slide01.png 
    :width: 600px
    :align: center
	    
    Cellular networks consists of a Radio Access Network
    (RAN) and a Mobile Core.

As shown in :numref:`Figure %s <fig-cellular>`, the cellular network
consists of two main subsystems: the *Radio Access Network (RAN)* and
the *Mobile Core*. The RAN manages the radio spectrum, making sure it
is used efficiently and meets the quality-of-service requirements of
every user.  It corresponds to a distributed collection of base
stations. As noted above, in 4G these are (somewhat cryptically) named
*eNodeB* (or *eNB*), which is short for *evolved Node B*.  In 5G they
are known as *gNB*. (The g stands for "next Generation".)

The Mobile Core is a bundle of functionality (as opposed to a
device) that serves several purposes.

-  Provides Internet (IP) connectivity for both data and voice services.
-  Ensures this connectivity fulfills the promised QoS requirements.
-  Tracks user mobility to ensure uninterrupted service.
-  Tracks subscriber usage for billing and charging.

Note that Mobile Core is another example of a generic term. In 4G
this is called the *Evolved Packet Core (EPC)* and in 5G it is called
the *Next Generation Core (NG-Core)*.

Even though the word “Core” is in its name, from an Internet
perspective, the Mobile Core is still part of the access network,
effectively providing a bridge between the RAN in some geographic area
and the greater IP-based Internet. 3GPP provides significant
flexibility in how the Mobile Core is geographically deployed, but for
our purposes, assuming each instantiation of the Mobile Core serves a
metropolitan area is a good working model. The corresponding RAN would
then span several dozens (or even hundreds) of cell towers.

Taking a closer look at :numref:`Figure %s <fig-cellular>`, we see that a
*Backhaul Network* interconnects the base stations that implement the RAN with
the Mobile Core. This network is typically wired, may or may not have
the ring topology shown in the Figure, and is often constructed from
commodity components found elsewhere in the Internet. For example, the
*Passive Optical Network (PON)* that implements Fiber-to-the-Home is a
prime candidate for implementing the RAN backhaul. The backhaul network
is obviously a necessary part of the RAN, but it is an implementation
choice and not prescribed by the 3GPP standard.

Although 3GPP specifies all the elements that implement the RAN and
Mobile Core in an open standard—including sub-layers we have not yet
introduced—network operators have historically bought proprietary
implementations of each subsystem from a single vendor. This lack of an
open source implementation contributes to the perceived “opaqueness” of
the cellular network in general, and the RAN in particular. And while it
is true that an eNodeB implementation does contain sophisticated
algorithms for scheduling transmission on the radio spectrum—algorithms
that are considered valuable intellectual property of the equipment
vendors—there is significant opportunity to open and disaggregate both
the RAN and the Mobile Core. The following two sections describe each,
in turn.

Before getting to those details, :numref:`Figure %s <fig-cups>`
redraws components from :numref:`Figure %s <fig-cellular>` to
highlight two important distinctions. The first is that a base station has an analog
component (depicted by an antenna) and a digital component (depicted
by a processor pair). The second is that the Mobile Core is
partitioned into a *Control Plane* and *User Plane*, which is similar
to the control/data plane split that someone familiar with the
Internet would recognize. (3GPP also recently introduced a
corresponding acronym—\ *CUPS, Control and User Plane Separation*—to
denote this idea.) The importance of these two distinctions will
become clear in the following discussion.

.. _fig-cups:
.. figure:: figures/Slide02.png 
    :width: 400px
    :align: center
    
    Mobile Core divided into a Control Plan and a User
    Plane, an architectural feature known as CUPS: Control and User
    Plane Separation

3.2 Radio Access Network
------------------------

We now describe the RAN by sketching the role each base station plays.
Keep in mind this is kind of like describing the Internet by explaining
how a router works—a not unreasonable place to start, but it doesn't
fully do justice to the end-to-end story.

First, each base station establishes the wireless channel for a
subscriber’s UE upon power-up or upon handover when the UE is active.
This channel is released when the UE remains idle for a predetermined
period of time. Using 3GPP terminology, this wireless channel is said to
provide a *bearer service*. The term “bearer” has historically been used in
telecommunications (including early wireline technologies like
ISDN) to denote a data channel, as opposed to a channel that
carries signaling information.

.. _fig-active-ue:
.. figure:: figures/Slide03.png 
    :width: 500px
    :align: center

    Base Station detects (and connects to) active UEs.

Second, each base station establishes “3GPP Control Plane”
connectivity between the UE and the corresponding Mobile Core Control
Plane component, and forwards signaling traffic between the two. This
signaling traffic enables UE authentication, registration, and
mobility tracking.

.. _fig-control-plane:
.. figure:: figures/Slide04.png 
    :width: 500px
    :align: center
	    
    Base Station establishes control plane connectivity
    between each UE and the Mobile Core.

Third, for each active UE, the base station establishes one or more
tunnels between the corresponding Mobile Core User Plane component.

.. _fig-user-plane:
.. figure:: figures/Slide05.png 
    :width: 500px
    :align: center
	    
    Base station establishes one or more tunnels between
    each UE and the Mobile Core’s User Plane.

Fourth, the base station forwards both control and user plane packets
between the Mobile Core and the UE. These packets are tunnelled over
SCTP/IP and GTP/UDP/IP, respectively. SCTP (Stream Control Transport
Protocol) is an alternative reliable transport to TCP, tailored to carry
signaling (control) information for telephony services. GTP (a nested
acronym corresponding to (General Packet Radio Service) Tunneling
Protocol) is a 3GPP-specific tunneling protocol designed to run over
UDP.

As an aside, it is noteworthy that connectivity between the RAN and the
Mobile Core is IP-based. This was introduced as one of the main changes
between 3G and 4G. Prior to 4G, the internals of the cellular network
were circuit-based, which is not surprising given its origins as a voice
network.

.. _fig-tunnels:
.. figure:: figures/Slide06.png 
    :width: 500px
    :align: center
	    
    Base Station to Mobile Core (and Base Station to Base
    Station) control plane tunneled over SCTP/IP and user plane
    tunneled over GTP/UDP/IP.

Fifth, each base station coordinates UE handovers with neighboring
base stations, using direct station-to-station links. Exactly like the
station-to-core connectivity shown in the previous figure, these links
are used to transfer both control plane (SCTP over IP) and user plane
(GTP over UDP/IP) packets.

.. _fig-handover:
.. figure:: figures/Slide07.png 
    :width: 500px
    :align: center
	    
    Base Stations cooperate to implement UE hand over.
    
Sixth, the base stations coordinate wireless multi-point transmission to
a UE from multiple base stations, which may or may not be part of a UE
handover from one base station to another.

.. _fig-link-aggregation:
.. figure:: figures/Slide08.png 
    :width: 500px
    :align: center
	    
    Base Stations cooperate to implement multipath
    transmission (link aggregation) to UEs.

The main takeaway is that the base station can be viewed as a
specialized forwarder. In the Internet-to-UE direction, it fragments
outgoing IP packets into physical layer segments and schedules them
for transmission over the available radio spectrum, and in the
UE-to-Internet direction it assembles physical layer segments into IP
packets and forwards them (over a GTP/UDP/IP tunnel) to the upstream
user plane of the Mobile Core. Also, based on observations of the
wireless channel quality and per-subscriber policies, it decides
whether to (a) forward outgoing packets directly to the UE, (b)
indirectly forward packets to the UE via a neighboring base station,
or (c) utilize multiple paths to reach the UE. The third case has the
option of either spreading the physical payloads across multiple base
stations or across multiple carrier frequencies of a single base
station (including Wi-Fi).

Note that as outlined in Chapter 2, scheduling is complex and
multi-faceted, even when viewed as a localized decision at a single
base station. What we now see is that there is also a global element,
whereby it’s possible to forward traffic to a different base station
(or to multiple base stations) in an effort to make efficient use of
the radio spectrum over a larger geographic area.

In other words, the RAN as a whole (i.e., not just a single base
station) not only supports handovers (an obvious requirement for
mobility), but also *link aggregation* and *load balancing*, mechanisms
that are familiar to anyone who understands the Internet. We will
revisit how such RAN-wide (global) decisions can be made using SDN
techniques in a later chapter.

3.3 Mobile Core
---------------

The main function of the Mobile Core is to provide external packet data
network (i.e., Internet) connectivity to mobile subscribers, while
ensuring that they are authenticated and their observed service
qualities satisfy their subscription SLAs. An important aspect of the
Mobile Core is that it needs to manage all subscribers’ mobility by
keeping track of their last whereabouts at the granularity of the
serving base station. It's the fact that the Mobile Core is keeping
track of individual subscribers—something that the Internet's core
does not do—that creates a lot of the complexity in its architecture,
especially given that those subscribers are moving around.

While the aggregate functionality remains largely the same as we migrate
from 4G to 5G, how that functionality is virtualized and factored into
individual components changes. The 5G Mobile Core is heavily
influenced by the cloud’s march toward a microservice-based (cloud
native) architecture. This shift to cloud native is deeper than it might
first appear, in part because it opens the door to customization and
specialization. Instead of supporting just voice and broadband
connectivity, the 5G Mobile Core can evolve to also support, for
example, massive IoT, which has a fundamentally different latency
requirement and usage pattern (i.e., many more devices connecting
intermittently). This stresses—if not breaks—a one-size-fits-all
approach to session management.

4G Mobile Core
~~~~~~~~~~~~~~

The 4G Mobile Core, which 3GPP officially refers to as the *Evolved
Packet Core (EPC)*, consists of five main components, the first three of
which run in the Control Plane (CP) and the second two of which run in
the User Plane (UP).

-  MME (Mobility Management Entity): Tracks and manages the movement of
   UEs throughout the RAN. This includes recording when the UE is not
   active.

-  HSS (Home Subscriber Server): A database that contains all
   subscriber-related information.

-  PCRF (Policy & Charging Rules Function): Tracks and manages policy
   rules and records billing data on subscriber traffic.

-  SGW (Serving Gateway): Forwards IP packets to and from the RAN.
   Anchors the Mobile Core end of the bearer service to a (potentially
   mobile) UE, and so is involved in handovers from one base station to
   another.

-  PGW (Packet Gateway): Essentially an IP router, connecting the Mobile
   Core to the external Internet. Supports additional access-related
   functions, including policy enforcement, traffic shaping, and
   charging.

Although specified as distinct components, in practice the SGW
(RAN-facing) and PGW (Internet-facing) are often combined in a single
device, commonly referred to as an S/PGW. The end result is illustrated
in :numref:`Figure %s <fig-4g-core>`.

.. _fig-4g-core:
.. figure:: figures/Slide20.png 
    :width: 700px
    :align: center
	    
    4G Mobile Core (Evolved Packet Core).

Note that 3GPP is flexible in how the Mobile Core components are
deployed to serve a geographic area. For example, a single MME/PGW pair
might serve a metropolitan area, with SGWs deployed across ~10 edge
sites spread throughout the city, each of which serves ~100 base
stations. But alternative deployment configurations are allowed by the
spec.

5G Mobile Core
~~~~~~~~~~~~~~

The 5G Mobile Core, which 3GPP calls the *NG-Core*, adopts a
microservice-like architecture, where we say “microservice-like” because
while the 3GPP specification spells out this level of disaggregation, it
is really just prescribing a set of functional blocks and not an
implementation. A set of functional blocks is very
different from the collection of engineering decisions that go into
designing a microservice-based system. That said, viewing the collection of
components shown in :numref:`Figure %s <fig-5g-core>` 
as a set of microservices is a good working model.

The following organizes the set of functional blocks into three groups.
The first group runs in the Control Plane (CP) and has a counterpart in
the EPC.

-  AMF (Core Access and Mobility Management Function): Responsible for connection
   and reachability management, mobility management, access
   authentication and authorization, and location services. Manages the
   mobility-related aspects of the EPC’s MME. 

-  SMF (Session Management Function): Manages each UE session, including
   IP address allocation, selection of associated UP function, control
   aspects of QoS, and control aspects of UP routing. Roughly
   corresponds to part of the EPC’s MME and the control-related aspects
   of the EPC’s PGW.

-  PCF (Policy Control Function): Manages the policy rules that other CP
   functions then enforce. Roughly corresponds to the EPC’s PCRF.

-  UDM (Unified Data Management): Manages user identity, including the
   generation of authentication credentials. Includes part of the
   functionality in the EPC’s HSS.

-  AUSF (Authentication Server Function): Essentially an authentication
   server. Includes part of the functionality in the EPC’s HSS.

The second group also runs in the Control Plane (CP) but does not have
a direct counterpart in the EPC:

-  SDSF (Structured Data Storage Network Function): A “helper” service
   used to store structured data. Could be implemented by an “SQL
   Database” in a microservices-based system.

-  UDSF (Unstructured Data Storage Network Function): A “helper” service
   used to store unstructured data. Could be implemented by a “Key/Value
   Store” in a microservices-based system.

-  NEF (Network Exposure Function): A means to expose select
   capabilities to third-party services, including translation between
   internal and external representations for data. Could be implemented
   by an “API Server” in a microservices-based system.

-  NRF (NF Repository Function): A means to discover available services.
   Could be implemented by a “Discovery Service” in a
   microservices-based system.

-  NSSF (Network Slicing Selector Function): A means to select a Network
   Slice to serve a given UE. Network slices are essentially a way to
   partition network resources in order to 
   differentiate service given to different users. It is a key feature
   of 5G that we discuss in depth in a later chapter.

The third group includes the one component that runs in the User Plane
(UP):

-  UPF (User Plane Function): Forwards traffic between RAN and the
   Internet, corresponding to the S/PGW combination in EPC. In addition
   to packet forwarding, it is responsible for policy enforcement, lawful
   intercept, traffic usage reporting, and QoS policing.

Of these, the first and third groups are best viewed as a
straightforward refactoring of 4G’s EPC, while the second group—despite
the gratuitous introduction of new terminology—is 3GPP’s way of pointing
to a cloud native solution as the desired end-state for the Mobile Core.
Of particular note, introducing distinct storage services means that all
the other services can be stateless, and hence, more readily scalable.
Also note that :numref:`Figure %s <fig-5g-core>` adopts an idea that’s
common in microservice-based systems, namely, to show a *message bus*
interconnecting all the components rather than including a full set of
pairwise connections. This also suggests a well-understood
implementation strategy.

.. _fig-5g-core:
.. figure:: figures/Slide33.png 
    :width: 700px
    :align: center
	    
    5G Mobile Core (NG-Core).

Stepping back from these details, and with the caveat that we are
presuming an implementation, the main takeaway is that we can
conceptualize the Mobile Core as a graph of services. You will
sometimes hear this called a *Service Graph* or *Service Chain*, the latter being more prevalent
in NFV-oriented documents. Another term, *Service Mesh*, has taken on
a rather specific meaning in cloud native terminology—we'll avoid
overloading that term here. 3GPP is silent on the specific terminology
since it is considered an implementation choice rather than part of the
specification. We describe our implementation choices in later chapters.

3.4 Security and Mobility
-------------------------

We now take a closer look at two unique features of the cellular
network—its support for security and mobility—both of which
differentiate it from WiFi. The following also serves to fill in some
details about how each individual UE connects to the network.

We start with the security architecture, which is grounded in two
trust assumptions.  First, each Base Station trusts that it is
connected to the Mobile Core by a secure private network, over which
it establishes the tunnels introduced in :numref:`Figure %s
<fig-tunnels>`: a GTP/UDP/IP tunnel to the Core's User Plane (Core-UP)
and a SCTP/IP tunnel to the Core's Control Plane (Core-CP). Second,
each UE has an operator-provided SIM card, which uniquely identifies
the subscriber (i.e., phone number) and establishes the radio
parameters (e.g., frequency band) needed to communicate with that
operator's Base Stations. The SIM card also includes a secret key that
the UE uses to authenticate itself.

.. _fig-secure:
.. figure:: figures/Slide34.png 
    :width: 600px
    :align: center
	    
    Sequence of steps to establish secure Control and User Plane
    channels. 

With this starting point, :numref:`Figure %s <fig-secure>` shows the
per-UE connection sequence. When a UE first becomes active, it
communicates with a nearby Base Station over a temporary
(unauthenticated) radio link (Step 1).  The Base Station forwards the
request to the Core-CP over the existing tunnel, and the Core-CP
(specifically, the MME in 4G and the AMF in 5G) initiates an
authentication protocol with the UE (Step 2). 3GPP identifies a set of
options for authentication and encryption, where the actual protocols
used are an implementation choice. For example, *Advanced Encryption
Standard* (AES) is one of the options for encryption. Note that this
authentication exchange is initially in the clear since the Base
Station to UE link is not yet secure.

Once the UE and Core-CP are satisfied with each other's identity, the
Core-CP informs the other components of the parameters they will need
to service the UE (Step 3). This includes: (a) instructing the Core-UP
to initialize the user plane (e.g., assign an IP address to the UE and
set the appropriate QCI parameter); (b) instructing the Base Station
to establish an encrypted channel to the UE; and (c) giving the UE the
symmetric key it will need to use the encrypted channel with the Base
Station.  The symmetric key is encrypted using the public key of the
UE (so only the UE can decrypt it, using its secret key). Once
complete, the UE can use the end-to-end user plane channel through the
Core-UP (Step 4).

There are three additional details of note about this process. First,
the secure control channel between the UE and the Core-CP set up
during Step 2 remains available, and is used by the Core-CP to send
additional control instructions to the UE during the course of the
session.

Second, the user plane channel established during Step 4 is referred
to as the *Default Bearer Service*, but additional channels can be
established between the UE and Core-UP, each with a potentially
different QCI value. This might be done on an
application-by-application basis, for example, under the control of
the Mobile Core doing *Deep Packet Inspection* (DPI) on the traffic,
looking for flows that require special treatment.

.. _fig-per-hop:
.. figure:: figures/Slide35.png 
    :width: 600px
    :align: center
	    
    Sequence of per-hop tunnels involved in an end-to-end User Plane
    channel.

Third, while the resulting user plane channels are logically
end-to-end, each is actually implemented as a sequence of per-hop
tunnels, as illustrated in :numref:`Figure %s <fig-per-hop>`.  (The
figure shows the SGW and PGW from the 4G Mobile Core to make the
example more concrete.) This means each component on the end-to-end
path terminates a downstream tunnel using one local identifier for a
given UE, and initiates an upstream tunnel using a second local
identifier for that UE. In practice, these per-flow tunnels are often
bundled into an single inter-component tunnel, which makes it
impossible to differentiate the level of service given to any
particular end-to-end UE channel. This is a limitation of 4G that 5G
has ambitions to correct.

Support for mobility can now be understood as the process of
re-executing one or more of the steps shown in :numref:`Figure %s
<fig-secure>` as the UE moves throughout the RAN.  The unauthenticated
link indicated by (1) allows the UE to be known to all Base Station
within range. (We refer to these as *potential links* in later
chapters.) Based on the signal's measured CQI, the Base Stations
communicate directly with each other to make a handover decision. Once
made, the decision is then communicated to the Mobile Core,
re-triggering the setup functions indicated by (3), which in turn
re-builds the user plane tunnel between the Base Station and the SGW
shown in :numref:`Figure %s <fig-per-hop>` (or correspondingly,
between the Base Station and the UPF in 5G). One of the most unique
features of the cellular network is that the Mobile Core's user plane
(e.g., UPF in 5G) buffers data during the handover transition,
avoiding dropped packets and subsequent end-to-end retransmissions.

In other words, the cellular network maintains the *UE session* in the
face of mobility (corresponding to the control and data channels
depicted by (2) and (4) in :numref:`Figure %s <fig-secure>`,
respectively), but it is able to do so only when the same Mobile Core
serves the UE (i.e., only the Base Station changes).  This would
typically be the case for a UE moving within a metropolitan area.
Moving between metro areas—and hence, between Mobile Cores—is
indistinguishable from power cycling a UE. The UE is assigned a new IP
address and no attempt is made to buffer and subsequently deliver
in-flight data. Independent of mobility, but relevant to this
discussion, any UE that becomes inactive for a period of time also
loses its session, with a new session established and a new IP address
assigned when the UE becomes active again.

Note that this session-based approach can be traced to the cellular
network's roots as a connection-oriented network. An interesting
thought experiment is whether the Mobile Core will continue to evolve
so as to better match the connectionless assumptions of the Internet
protocols that typically run on top of it.

3.5 Deployment Options
----------------------

With an already deployed 4G RAN/EPC in the field and a new 5G
RAN/NG-Core deployment underway, we can’t ignore the issue of
transitioning from 4G to 5G (an issue the IP-world has been grappling
with for 20 years). 3GPP officially spells out multiple deployment
options, which can be summarized as follows.

-  Standalone 4G / Stand-Alone 5G
-  Non-Standalone (4G+5G RAN) over 4G’s EPC
-  Non-Standalone (4G+5G RAN) over 5G’s NG-Core

The second of the three options, which is generally referred to as
“NSA“, involves 5G base stations being deployed alongside the
existing 4G base stations in a given geography to provide a data-rate
and capacity boost. In NSA, control plane traffic between the user
equipment and the 4G Mobile Core utilizes (i.e., is forwarded through)
4G base stations, and the 5G base stations are used only to carry user
traffic. Eventually, it is expected that operators complete their
migration to 5G by deploying NG Core and connecting their 5G base
stations to it for Standalone (SA) operation. NSA and SA operations
are illustrated in :numref:`Figure %s <fig-nsa>`.

.. _fig-nsa:
.. figure:: figures/Slide38.png 
    :width: 600px
    :align: center
	    
    NSA and SA options for 5G deployment.

One reason we call attention to the phasing issue is that we face a
similar challenge in the chapters that follow. The closer the following
discussion gets to implementation details, the more specific we have to
be about whether we are using 4G components or 5G components. As a
general rule, we use 4G components—particularly with respect to the
Mobile Core, since that’s what's available in open source today—and trust
the reader can make the appropriate substitution without loss of
generality. Like the broader industry, the open source community is in
the process of incrementally evolving its 4G code base into its
5G-compliant counterpart.

.. _reading_migration:
.. admonition:: Further Reading

    For more insight into 4G to 5G migration strategies, see
    `Road to 5G: Introduction and Migration
    <https://www.gsma.com/futurenetworks/wp-content/uploads/2018/04/Road-to-5G-Introduction-and-Migration_FINAL.pdf>`__.
    GSMA Report, April 2018.
