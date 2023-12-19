# In a nutshell

The MOSFET (Metal Oxide Semiconductor Field Effect Transistor) is one of the most used electronic devices.
From now on will be described the structure and the working principle of a n-MOS (enhancement type), but the considerations are also valid for p-MOS (with different signs).

## The structure

 The n-MOS is fabricated on a p-type substrate, where two heavily doped n-type regions are created. These are named respectively **source** and **drain**.
 A thin layer of silicon dioxide is grown on the surface of the substrate, above the area between source and drain, then metal (or Poly-Si) is deposited on top of the oxide, creating the **gate** contact. 
 Source, drain and the substrate (also called *body* or *bulk*) will have a metallic contact, and the device is a quadrupole:
 - Source (S)
 - Drain (D)
 - Gate (G)
 - Body (B)

![[MOSstructure.png | 400]]

The coordinate system is usually set as the picture above. The interesting effects happen on the x and y axes. The origin is set at the Si-oxide interface and source-body junction.
Along the x axis there is the actual MOS structure (a capacitor) and over the y axis source drain and the substrate create two *pn* junctions back-to-back: 

### The two *pn* junctions

The two junctions form two barriers from source to drain, due to the built-in potential even at equilibrium (like usual single pn junction). When the juntions are reverse biased, the barriers are higher and the potential difference is $V_{bi}-V_{A}$ 
![[MOSFETpnJunc.png | 450]]
this prevents the flow of current between source and drain in usual conditions (without the MOS structure).

### The MOS capacitor

This chapter is based on this file [Chenming Hu](https://www.chu.berkeley.edu/wp-content/uploads/2020/01/Chenming-Hu_ch5-1.pdf). The following explanations are quite qualitative, just to better understand the properties of the MOS structure.

The energy band diagram is usually drawn with the metal on the left, oxide in the middle and the body on the right hand side.

![[NoBias.png | 500]]

Depending on the external bias applied, in the MOS capacitor there are four possible conditions:
1) Flat-band
2) Accumulation
3) Depletion
4) Inversion

#### 1) Flat-band

When a special bias ($V_{fb}$) is applied to the capacitor, the flat-band condition occurs. This means that the energy band of the substrate is flat at the $Si-SiO_{2}$ interface. The flatband voltage is equal to the difference between the Fermi levels at the two terminals: 
$$
V_{fb}=\psi_{g}-\psi_{s} 
$$
where $\psi_{g}$ and $\psi_{s}$ are the gate and semiconductor work function respectively, in volts. 
![[FlatBand.png | 500]]

#### 2) Accumulation

![[SurfaceAccumulation.png | 500]]

If the applied voltage is smaller than $V_{fb}$, so $V_{g}<V_{fb}$,
the so called surface accumulation condition is reached. This means that there is a bending in the substrate's bands and $E_{v}$ is closer to $E_{f}$ at the surface than in the bulk, so the surface hole concentration is larger than the bulk hole concentration. 
Therefore a large number of holes (in this case we are considering a p-type bulk; in a p-MOS where the substrate is n-type electrons accumulate near the interface)

#### 3) Depletion

![[MOSDepletion.png | 500]]

This condition occurs when $V_{g}>V_{fb}$. The bands at the interface are bent in the opposite direction compared to surface accumulation. In this case $E_{f}$ is far from both $E_{c}$ and $E_{v}$ and electron and hole density are both small. This condition is called surface depletion. In the n-MOS the charge below the interface is negative because the acceptors "accepted" the extra electron and hence they are negatively charged.

#### 4) Invertion

##### Threshold
![[MOSth.png | 500]]
If from depletion the bias applied is increased, the bending in bands is increased to the point that $E_{f}$ near the $Si-SiO_{2}$ interface is close enough to $E_{c}$ and this area is no longer in depletion but at the *threshold of inversion*. Invertion means that the surface is inverted from p-type to n-type in terms of carriers, or electron rich. The threshold is often defined as the condition when the concentration of electrons at the surface is equal to the bulk doping concentration (of acceptors)

The threshold voltage is than defined as: 
$$
V_{th}=V_{fb}+{2}{\phi_{B}}+\frac{\sqrt{ qN_{a}2\varepsilon_{S}2\phi_{B}}}{C_{ox}} 
$$
##### Beyond threshold

![[MOSinversion.png | 500]]
When $V_{g}>V_{th}$ there is an inversion layer, filled with inversion electrons. The MOS capacitor in strong inversion behaves like a capacitor exept for a voltage offset of $V_{th}$
