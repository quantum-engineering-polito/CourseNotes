
Etching is the process in which unwanted areas of films or bulk material are removed **selectively**.

We can distinguish between **wet etching**, where the materials to be removed are dissolved in a chemical solution, and **dry etching** where they react with gases (thermal or plasma). In both cases the photoresist protects the areas which have to remain.

In some special cases, in place of a photoresist, there is the need to use a **hard mask** (usually made out of $SiO_2$ or $Si_3 N_4$ or metals such as $Cr$ or $Al$) which can withstand more "aggressive" environments and dilamination. ^0fa6e1

# Etchant properties

Different etchants can have a very different behaviour and etch the same material in various ways. The most relevant properties are:

## Etch rate

The etch rate is the rate of material removal (usually in $\mu$m/min) and is **function** of various factors such as concentration, mixing speed, temperature, material, layout, etc. The etch rate follows an **Arrhenius relationship**. On one side we would like a high etch rate to reduce processing times but, on the other, we would like an etch rate slow enough that the etching is easy to control and reproducible.

![[etch rate layout.svg|300]]

## Selectivity

Selectivity is the **relative** ratio of etch rate between what we want to etch (the film) and what we do not want to etch (mask, substrate, etc.).

It is important to notice that we usually have to consider two different selectivies: film/mask and film/underlying film. 

$$
S_{f:m} = \frac{R_{\text{film}}}{R_{\text{mask}}}
$$

$$
S_{f:u} = \frac{R_{\text{film}}}{R_{\text{under}}}
$$

We would like to have both values high to limit the resolution loss in the first case and the over-etch of the material in the second.

Unfortunately there is a **trade-off** between etch rate and selectivity: the higher the etch rate, the lower the selectivity (a very aggressive etchant will etch fast but it will also be less selective).

## Isotropy

Isotropic etching means that the the etch rate is the same in all directions, while anisotropic means that there is some "preferred" direction where the etching will happen faster and others where it will be slower. The rate depends on the crystallographic plane of the material: $KOH$ for example has a relative etch rate of 40:30:1 respect to <110>, <100> and <111> silicon.

We have to keep in mind that isotropy is not only a property of the material, but also of the process: the same material can be etched both isotropically and anysotropically by selecting different etchants and different processes.

![[iso_aniso_tropic.png|400]]


Less important parameters are:

- **Surface roughness**: different etchants can leave different surface finishes and this could be an important factor  (for example) for optical properties.
- **Control of etch parameters**: the more control we can have on the end result the better.
- **Safety**: both reactants and by-products can be dangerous and need to be handled properly.
- **Cost**.
- **Etch-stops effectiveness**: it is important to have a way of knowing when to stop the etching process and often a time based approach is not enough. As we will see later, there are methods to precisely stop the process which allow to minimize the chance of over etching.

# Wet etching

The wet etching process is mostly straightforward: the wafer is placed in an **acid bath** so that the etchant can come into contact with the surfaces that need to be etched. The etchant is stirred constantly to allow the removal of by-products from the etched regions. After the etching is completed, the wafer is **rinsed** (washed) in a deionized water jet and finally **dried** with a hyper pure $\ce{N_2}$ or air jet.

![[wet etching.png|400]]

## Wet etching silicon

Since silicon is a crystal, it naturally tends to etch anysotropically (some directions etch faster than others) but it is also possible to etch it isotropically using a multiple steps technique described below.

## Isotropic silicon etching

One way to etch silicon isotropically is use to exploit the fact that  $\ce{SiO_2}$ is an amorphous material and thus etches isotropically. The method consists in oxidizing a thin layer of  $\ce{Si}$ with  $\ce{HNO_3}$ (nitric acid) and etching it away with $\ce{HF}$ (hydrofluoric acid).
The amounts of the two acids have to be properly balanced: too much $HNO_3$ will create too much $SiO_2$ which will not be removed.

## Anisotropic silicon etching

On the other hand, anisotropic etching of $Si$ is more straightforward. The quickest method uses  $\ce{KOH}$ pellets dissolved in water. Since it is very fast it is also **poorly controllable** and is good for etching thick layers ($\simeq 10-100 ~n$m). 

Because of the presence of potassium, this technique cannot be used in microelectronics (in particular CMOS) because potassium can diffuse in the material and alter its electrical properties.

![[aniso wet etching Si.png|30]]
Since $KOH$ is quite an aggressive alkaline solution, normal resist would not be able to protect the wafer. For this reason, the most employed materials are $SiO_2$ or $Si_3N_4$, which are more durable .

The setup for the process is very simple since it only requires a hot plate, a Pyrex becker and a stirrer (a small magnetic bar covered in Teflon which is spun by and electromagnet) to improve by-product removal.

A poor by-product removal can increase the surface roughness due to a phenomenon called **hillocking** which consists in the formation of small unetched "pyramids" on the surface. These pyramids are caused by micrometric $\ce{H_2}$ bubbles which stick to the surface and prevent it from being reached by the etchant.

## Etching $SiO_2$

We have seen before that for monocrystalline silicon we use two reactants for the etching process, in this paragraph we will talk about the hydrofluoric acid ($HF$).
$HF$ acts as a selective wet etchant for SiO2 if employed at room temperature (it etches SiO2 but not Si).

For what concerns the etch rate, this is strongly dependent on the concentration on the employed solution, the maximum available concentration is 49%, whose etch rate is on the order of $2 \mu/$min. Since this etch rate is generally too fast, $HF$ is usually employed as a controlled wet etchant with a diluted solution ranging from 5:1 to 50:1 in order to obtain a lower etch rate ( $< 0.1\mu /$min).
The etching geometry is completely isotropic since the silicon dioxide is an amorphous material. If it is buffered with $NH_4F$ we will obtain a constant pH and a stable etch rate. 

The main disadvantages of using this etchant is that its etch rate is not linear with high concentration and that it is very dangerous a dangerous acid: since it isn't a strong acid and it looks like water, it doesn't hurt if touched but will penetrate the skin and it will attack the bones.

## Dependence on crystallographic plane

#todo

## Dependence on temperature

#todo

## Dependence on temperature

#todo

# Dry etching

In dry etching the etchant comes from a gas or vapor phase source and its atoms are typically ionized in order to react better with the material to be etched.

There are two types of dry etching: plasma based and non plasma based: 

## Vapour etching

An example of isotropic dry etching process for silicon is Xenon difluoride ( $\ce{XeF_2}$) which provides a **very high selectivity** for $\ce{Al}$, $\ce{SiO_2}$, photoresist, etc. the disadvantage is that the etched surfaces are very rough.

The  $\ce{XeF2}$ is sublimed at 1 Torr ($0.0013$ atm) under a bell-jar.

The main disadvantages are that the etch rate is very fast the etching reaction is **exothermic**: this could be an issue to take into account since the heat could damage other features of the substrate.

Another method that can be used for vapor phase etching uses $HF$ and provides cleaner results compared to its liquid counterpart seen above.

## Plasma based dry etching

Plasma etching has the advantage of being performed at lower temperatures compared to thermally driven reactions, it can provide directionality and introduces many degrees of freedom to the process.

The plasma is created similarly to what happened in [[CVD#Plasma generation (AC voltage)|PECVD]] with an RF voltage. In this case though the chamber is partially filled with the etchant in gaseous form. 

![[plasma etching setup.png|300]]

Since the chemical species will arrive at the substrate with random directions, the resulting etched profile will be **fully isotropic**, with significant undercut. In addition, the etch is purely **chemical** and, for this reason, it will also be selective: if some material (like the mask) is not etched by the specific free radicals, there will be no etch at all.

![[plasma etching.png|500]]

## Reactive ion etching (RIE)

Reactive ion etching is a technique similar [[PVD#Sputtering|sputtering]], but the noble gas is replaced with reactive gases which are able to selectively etch the target material.
In both plasma etching and RIE, gas composition produces the reactive species necessary for etching.

![[RIE.png|300]]

As we can see in the figure below in the right, the layout of the equipment is the same as in sputtering , but with the role of the two electrodes that it is inverted: the wafer is placed on the smaller power electrode on the bottom; on the top we have the bigger electrode connected to ground. 

Comparing the picture above with the one for normal plasma based dry etching, we can see that ions ($I^{-}$) move towards the wafer. This is possible thanks to a negative bias voltage. Moreover, to obtain the desired level of anisotropy we need to privilege the ion bombardments on the surface of the wafer, this is accomplished by making the two electrodes asymmetric in terms of diameter and extension.

![[RIE res.png|500]]
As we can see in the left, if we apply a low negative voltage (low bias voltage) we obtain something similar of an isotropic etching process, as we have seen in the previous classical plasma dry etching. On the other side, if we apply a high negative voltage (high electric field) we obtain a stronger acceleration of the ions, and, as a consequence, a more vertical bombardment of the substrate. The result is something which is impossible to obtain with other etching approach because it allows the **tuning** of the isotropy: increasing the bias voltage moves the process from a purely **chemical**, **isotropic** process, towards a purely **physical**, **anisotropic** process (we can imagine going from a classical plasma based etching to sputtering).

![[RIE results.png|400]]

### Inductively Coupled Plasma (ICP-RIE) Reactor

An upgrade of the RIE configuration is the one which is reported below:

![[ICP RIE.png|400]]

In Reactive Ion Etching we have a parallel plate configuration so as to generate plasma condition between the electrodes, and one single RF generator that is responsible for both the plasma generation and for the ion bombardment.

On the other hand, in Inductively Coupled Plasma, we have two RF generators that can be optimized independently in terms of electrical parameters: the top RF generator it is inductively coupled (13.56 MHz) with the reactor so as to generate the charge which creates the plasma. The bottom RF generator is coupled (13.56 MHz) with the bottom electrode, and it is purely responsible for the ion bombardment. 
This is a more complex system used for polysilicon etching and aluminium etching. 

### Selectivity

$CF_4$ plasma processes can be used to etch $Si$ selectively with respect to $SiO_2$ and $SiO_2$ selectively with respect to $Si$ simply by adding a small percentage of $O_2$ or $H_2$.
Small addition of $O_2$ enhances $Si$ etch rate without affecting $SiO_2$ too much, addition of $H_2$, on the other hand, decreases $Si$ etch rate more than $SiO_2$ etch rate. 

![[RIE selectivity.png|400]]

From the plot below we can see that starting with a pure $CF_4$ etchant we can increase the selectivity (the height difference between the grey bar and the blue one) by adding oxygen (as stated before it increases both etch rates but in different amounts). On the rightmost part of the plot we can also see that we can invert the roles of the two materials by adding hydrogen; this means that we could use silicon as a protective layer to etch $SiO_2$.
![[RIE selectivity 2.png|400]]
## Deep Reactive Ion Etching (DRIE)

#todo review

The standard processes uses a combination of fluorine ($F$) based chemical compounds since $F$ is selectively able to etch Silicon/Silicon Dioxide. Using chemistries based on carbon and fluorine with an increase of $C/F$ ratio you will not obtain an etching process but an inverse one. This is also called polymerization or polymer deposition; it works as a formation of non-volatile products on sidewalls. This passivation protects the sidewalls from incoming radicals which could etch them, the process works by alternating etching step and passivation step. The latter is obtained by changing the chemistry of the gas that is introduced to the reactor (with a higher C/F ratio). 

![[DRIE.png|600]]

The etching step uses $SF_6$ with a substrate bias of 5 to 40 V so that the cations generated in the plasma are accelerated nearly vertically into the substrate being etched. After etching for a short time, the polymerization process is started.

A mixture of $C_4F_8$ (high $C/F$ ratio) and argon is used, and all exposed surfaces (sidewalls and horizontal surfaces) are coated with a Teflon like (polymerized $CF_2$) polymer layer approximately 50 nm thick. If ion bombardment, due to a small applied bias voltage, is used during the polymerization step, the formation of **polymer on the horizontal surfaces can essentially be prevented**. The etching step is then repeated, and the polymer deposited on the horizontal surfaces is rapidly moved due to the ion bombardment and the presence of reactive fluorine radicals. 

![[DRIE res.png]]

# Over-etch estimation

When planning an etching process, it is important to take into account the fact that the **film thickness** and the **etch rate** may not be uniform. This means that we need to over-etch to be sure to remove any leftover film. 
Obviously the higher the selectivity, the better the results since the substrate would be less affected.

# Endpoint detection

## Laser interferometry

## Optical emission spectroscopy

