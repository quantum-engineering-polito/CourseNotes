Epitaxy is a technique that consists in growing monocrystalline layers on top of a monocrystalline substrate. Similarly to the [[#^649cfb|Czochralski process]], a seed is needed for the new crystal to grow properly but in this case the grown material does not have to be the same as the substrate. With **heteroepitaxy** it is possible to grow different crystals on top of a pure silicon substrate provided that they have a similar crystalline structure and lattice parameter.

Epitaxy can be used for multiple reasons such as adding a layer with different doping on top of a doped substrate (for example to increase breakdown voltage), or create **buried layers**. Buried layers are regions of the substrate which are doped and the covered with a new layer of silicon; this can be useful since it is not possible to add dopants too deeply. It is also possible to control the doping profile (the concentration of dopants at different depths) as visible in the plots.

![[doping profile.excalidraw.png]]

Epitaxial layers are also **smoother** than the substrate (which can be needed to deposit a smooth layer on a rough substrate) and **less contaminated**.

## Growth regimes

The image shows the boundary between monocrystalline and polycrystalline growth; with exactly the same conditions, just by changing the temperature, the results can vary a lot. We can see that monocrystals require higher temperatures, this is because when the $Si$ atoms hit a cold surface they stick to it (**condensation**), if the surface is hot, on the other hand, they can diffuse and "fill holes", providing a more homogeneous result. 

The plot also shows that monocrystals require more time to be grown at a given temperature.

![[growth regimes.png|400]]

## Epitaxial techniques

Epitaxial techniques can be divided according to the **mother phase** (the environment where we introduce the element for epitaxy).

### Vapour Phase Epitaxy (VPE)

VPE uses gaseous precursors which contain the gas to be deposited and a carrier gas. 

The wafers are introduced in a reaction chamber and they are induction heated by a graphite susceptor. This heating technique prevents the walls of the chamber from heating up and reacting with the gases.
Once the required temperature is reached, the precursor is introduced in the chamber where it is dissociated: one part is deposited on the substrates and the by-product is vented. 

An example reaction would be 

$$
SiCl_{4} + 2 H_{2} \iff Si + \underbrace{ 4HCl }_{ \text{vented} }
$$
It is important to notice that this formula would be the same for both mono and polycrystal deposition, what changes is the temperature.

#### Reactors

We can have different kinds of reactors with different advantages and disadvantages.

![[vpe reactors.svg|500]]
### Liquid Phase Epitaxy (LPE)

LPE uses an oversaturated solution containing the material to be deposited. The solution is kept at high temperature to prevent precipitation, the substrate is then placed under it and the temperature is slowly decreased to favour precipitation of the solute on the wafer and allow the epitaxy.

#### Reactor

The LPE reactor consists in a crucible hosts one or more wells which contain the mother phase. To start the process a substrate is slid under the well and the temperature is lowered. To stop the process, on the other hand, the substrate is removed from under the well.

![[MPE reactor.png|400]]

To avoid oxidation of the solution and the substrate, the process happens under a flux of purified $H_{2}$.

### Molecular Beam Epitaxy (MBE)

In MBE the mother phase is in **molecular flux conditions** (a gas at very low pressure where the molecules never collide with each other).

The reaction takes place in a **ultra high vacuum** (UHV) chamber that contains the wafer and multiple furnaces (**Knudsen cells**) that host the material to be deposited in solid form (?). The wafer is held by a rotating support that allows for a more uniform deposition.

The reaction is started and stopped by opening and closing **shutters** that cover the furnaces; this guarantee a fine control over the process.

The furnaces are separated by $N_{2}$ cooled walls that keep them thermally isolated from each other.

![[molecular beam epitaxy.png|400]]

Since UHV require a lot of time to be achieved, the main chamber is preceded by a smaller chamber used for loading the substrates without breaking the vacuum in the main chamber.
