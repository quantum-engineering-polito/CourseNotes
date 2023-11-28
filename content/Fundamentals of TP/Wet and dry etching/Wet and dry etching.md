
Etching is the process in which unwanted areas of films or bulk material are remove **selectively**.

We can distinguish between **wet etching**, where the materials to be removed are dissolved in a chemical solution, and **dry etching** where they react with gases (thermal or plasma). In both cases the photoresist protects the areas which have to remain.

In some special cases, in place of a photoresist, there is the need to use a **hard mask** which can withstand more "aggressive" environments.

## Etchant properties

Different etchants can have a very different behaviour and etch the same material in various ways. The most relevant properties are:

### Etch rate

The etch rate is the rate of material removal (usually in $\mu$m/min) and is **function** of various factors such as concentration, mixing speed, temperature, material, layout, etc. The etch rate follows an **Arrhenius relationship**. On one side we would like a high etch rate to reduce processing times but, on the other, we would like an etch rate slow enough that the etching is easy to control and reproducible.

![[etch rate layout.png|center|300]]

### Selectivity

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

### Isotropy

Isotropic etching means that the the etch rate is the same in all directions, while anisotropic means that there is some "preferred" direction where the etching will happen faster and others where it will be slower. Anisotropy is a property of the process: the same material can be etched both isotropically and anisotropically by selecting different etchants and different processes.

![[iso_aniso_tropic.png|center|400]]


Less important parameters are:

- **Surface roughness**: different etchants can leave different surface finishes and this could be an important factor  (for example) for optical properties.
- **Control of etch parameters**: the more control we can have on the end result the better.
- **Safety**: both reactants and by-products can be dangerous and need to be handled properly.
- **Cost**.

## Wet etching

The wet etching process is mostly straightforward: the wafer is placed in an **acid bath** so that the etchant can come into contact with the surfaces that need to be etched. The etchant is stirred constantly to allow the removal of by-products from the etched regions. After the etching is completed, the wafer is **rinsed** (washed) in a deionized water jet and finally **dried** with a hyper pure $\ce{N_2}$ or air jet.

### Wet etching silicon

Since silicon is a crystal, it naturally tends to etch anysotropically (some directions etch faster than others) but it is also possible to etch it isotropically.

#### Isotropic silicon etching

One way to etch silicon isotropically is use to exploit the fact that  $\ce{SiO_2}$ is an amorphous material and thus etches isotropically. The method consists in oxidizing a thin layer of  $\ce{Si}$ with  $\ce{HNO_3}$ and etching it away with $\ce{HF}$.

#### Anisotropic silicon etching

On the other hand, anisotropic etching of $Si$ is more straightforward. The quickest method uses  $\ce{KOH}$ pellets dissolved in water. Since it is very fast it is also **poorly controllable** and is good for etching thick layers ($\simeq 10-100 ~n$m). 

Because of the presence of potassium, this technique cannot be used in microelectronics (in particular CMOS) because potassium can diffuse in the material and alter its properties.

The setup for the process is very simple since it only requires a hot plate, a Pyrex becker and a stirrer to improve by-product removal. A poor by-product removal can increase the surface roughness due to a phenomenon called **hillocking** which consists in the formation of small unetched "pyramids" on the surface. These pyramids are caused by micrometric $\ce{H_2}$ bubbles which stick to the surface and prevent it from being reached by the etchant.

#### Dependence on crystallographic plane

#todo

#### Dependence on temperature

#todo

#### Dependence on temperature

#todo

#### Hydrofluoric acid

#todo

## Dry etching

In dry etching the etchant comes from a gas or vapor phase source and its atoms are typically ionized in order to react better with the material to be etched.

There are two types of dry etching: plasma based and non plasma based.

### Vapour etching

An example of isotropic dry etching process for silicon is Xenon difluoride ( $\ce{XeF_2}$) which provides a **very high selectivity** for  $\ce{Al}$,  $\ce{SiO_2}$, photoresist, etch. the disadvantage is that the etched surfaces are very rough.

The  $\ce{XeF2}$ is sublimed at 1 Torr ($0.0013$ atm) under a bell-jar. The etching reaction is exothermic and this could be an issue to take into account since it could damage other features of the substrate.

The etch rate is very fast.

Another method that can be used for vapor phase etching uses $HF$ and provides cleaner results compared to its liquid counterpart seen above.

### Plasma based dry etching

Plasma etching has the advantage of being performed at lower temperatures compared to thermally driven reactions, it can provide directionality and introduces many degrees of freedom to the process.

#### Reactive ion etching (RIE)

#todo