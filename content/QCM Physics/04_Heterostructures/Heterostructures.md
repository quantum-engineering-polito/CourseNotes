---
nextnote: "[[Quantum Hall effect]]"
author: Giacomo, BabelDev0
authorlink: https://github.com/gamberoillecito,https://github.com/BabelDev0
---
# What are heterostructures?
**Heterostructures** are semiconductors composed of more than one material. And **heterojunction** is where the two materials meet.

Factors to consider when joining two semiconductors:
- BandGap
- Lattice mismatch
- Crystal structure

For good basic level heterostructure we usually need:
- Same crystal structure
- Similar lattice parameter

For this reason we usually use III-V group semiconductors, because they generally share the same crystal structure (diamond-like)

![[semiconductor.png|400]]

The prevalent use of heterostructures often involves combining gallium arsenide (GaAs) and aluminum arsenide (AlAs) due to their congruent lattice parameters and distinct bandgaps. Additionally, these materials are alloyed, affording the capability to finely adjust the bandgap by controlling the alloy's composition. Crucially, Vegard's Law facilitates predicting the lattice constant of the alloy through a weighted average of the individual components' lattice constants. This predictive power enables the growth of multiple layers atop one another with minimal stress.

# Purpose
The whole point of growing heterostructures is the opportunity that they offer to manipulate the behavior of electrons and holes through **band engineering** creating for example wells where confine electrons or barriers.

# How to build a band diagram of a heterojunction
## intrinsic semiconductors
Consider two materials A and B with $E_{g,A} < E_{g,B}$ like in the case of A=GaAs and B=AlGaAs. First of all we use the **Anderson’s rule** aka we use the vacuum level (he energy of a free stationary electron that is outside of any material) as reference to draw the band diagram.

![[intrinsic_heterostructure.svg]]

where $\varkappa_{i}$ is the electron affinity, that is the energy required to take an electron from the bottom of conduction band to the vacuum level (we measured it for every material)

![[typeOfheterojunction.png|400]]

## Further complication
The components of a heterostructure may have minima in the bands at different points in the Brillouin zone. 
![[differentMinimaHeterostructure.png]]
The effective mass and valley degeneracy vary abruptly at the crossover, and the change from a direct to an indirect energy gap gives a profound change in the optical properties.

![[explain_complication.png]]

This configuration leads as we seen to more unpredictable behaviour.
# Doped semiconductors
Semiconductors can be doped. This changes the position of the Fermi level within the gap.

![[doping.png]]

## Depletion region
A depletion region is an insulating region within a conductive, doped semiconductor material where the mobile charge carriers "Charge carrier" have diffused away, or forced away by an electric field. The only elements left in the depletion region are ionized donor or acceptor impurities. This region of uncovered positive and negative ions is called the depletion region due to the depletion of carriers in this region, leaving none to carry a current. This region is formed at the interface of the heterojunction

![[deplitionRegion.png]]
  
Out of equilibrium, the Fermi level exhibits two distinct values—one for the p-type material and another for the n-type. However, at the junction, electrons begin to diffuse from the n-type to the p-type, and vice versa for holes, resulting in the formation of a depletion region. This depletion region induces band bending, explaining why the Fermi level remains constant at equilibrium.

If we examine an n-type material alongside a p-type material, with the n-type material possessing a bandgap greater than that of the p-type material

![[outofequilibrium-bandbending.svg]]

we obtain the following effect on the band diagram

![[bandDiagramDeplitionRegion.png]]

# 2D Electron Gas
**n**: almost intrinsic
**N**: heavily doped

![[QCM Physics/04_Heterostructures/attachments/excalidraw/remote doping.svg|400]]

The green line in the drawing is the tangent to the conduction band which can be used as an approximation for a **triangular potential well**.

The well can be approximated as a capacitor which represent the interface between the materials.
Since the electric field changes only in the $z$ direction, we can write 

$$
\bar{\varepsilon} \equiv \varepsilon_{z} = \varepsilon = - \frac{d\phi}{dz}
$$

We can also say that since $\phi = 0$ when $z = 0$, then $\phi = -\varepsilon \cdot z$. The potential energy then is $V(z) = e \varepsilon_{z}$.
This approximation, the fact that the potential is linear, works well near the interface (see the green line in the drawing above).

#todo add drawing

We can assume that $L_{x}$ and $L_{y}$ are macroscopic quantities and that $A = L_{x} \cdot L_{y}$.

Since the electrons are free and independent in the $x,y$ plane:

$$
V(x,y) = 0
$$
So:

$$
V(z) = \begin{cases}
e \cdot \varepsilon_{z} &&z \geq 0 \\ \\
\infty && z < 0
\end{cases}
$$

The SE is:

$$
-\frac{\hbar^{2}}{2m} \nabla^{2} \Psi(x,y,z) + V(z) \Psi(x,y,z) = E ~ \Psi(x,y,z)
$$

we want to find solutions that can be factorized so that one depends only on $x$ and $y$ and the other one that depends only on $z$:

$$
\Psi(x,y,z) = \phi(x,y) \cdot \theta(z)
$$

With a few steps (not reported) we get:
#todo add those steps because $E = E_{xy} + E_{z}$ is needed later

$$
\begin{align} \\
 & -\frac{\hbar^{2}}{2m}\left( \frac{ \partial^{2} }{ \partial x^{2} } + \frac{ \partial^{2} }{ \partial x^{2} }  \right) \phi(x,y) = E \phi(x,y) \tag{4} \\ \\
 & -\frac{\hbar^{2}}{2m} \frac{d^{2}}{dz^{2}} + V(z) \theta(z) = E \theta(z) \tag{5}
\end{align}
$$

Equation (4) describes the free electrons is the $xy$ plane (where the potential is constant) and thus we get plane waves: 

$$
\begin{align}
 & \phi(x,y) = \frac{1}{\sqrt{ A }} e^{ i \bar{k} \bar{r} } = \frac{1}{\sqrt{ A }} e^{ i(k_{x} \cdot x + k_{y} \cdot y) }  \qquad A = L_{x} \cdot L_{y} \\
 \\
 & E_{xy} = \frac{\hbar^{2} k^{2}}{2m}
\end{align}
$$

Notice that $m$ should be the **effective mass** $m^{*}$.

Applying the [[#^dedc30|PBC]] to the $x$ and $y$ directions we get 

$$
\begin{align}
 & \phi(x + L_{x}, y, z) = \phi(x,y,z) \implies k_{x} = \frac{2\pi}{L_{x}} \cdot n_1\\
 & \phi(x , y + L_{y}, z) = \phi(x,y,z) \implies k_{y} = \frac{2\pi}{L_{y}} \cdot n_2
\end{align}
$$

Equation (5), on the other hand, describes the particles in a triangular potential well. By applying multiple changes of variable (not reported here) we get:

$$
\begin{align}
 & \frac{d^{2}}{dS^{2}} \theta(S) = S \theta(S) \tag{6} \\ \\
& \begin{cases}
S = \bar{z} - \bar{E}  \\
\bar{z} = z/z_0 \\
\bar{E} = E_{z}/E_0 \\
z_0 = \left[ \frac{\hbar^{2}}{2~m~e~\varepsilon} \right]^{1/3} &&\leftarrow \text{characteristic length} \\
E_0 = \frac{\hbar^{2}}{2~m~z_0^{2}}  && \leftarrow \text{characteristic energy}
\end{cases}
\end{align}
$$

Equation (6) has two possible solution $A_{i}$ and $B_{i}$ of which only the first one is acceptable ($B_{i}$ diverges).

#todo add plot

We have to impose the boundary conditions (**continuity**) to the SE:  $\theta(z = 0) = 0$. Since the equation we have is in the variable $S$ we get 

$$
\displaylines{
z = 0 \iff S = -\bar{E}\\
\Downarrow \\
\theta(S = -\bar{E}) = 0
}
$$

This is true only in the values $C_{i}$ for which $A_{i} = 0$. This means (similarly to the infinite potential well) that the possible energy values are quantized:

$$
\begin{align}
 E_{z} &= |C_0| E_0 && \leftarrow ~ 1^{st} \text{ allowed energy value} \\
E_{z} &= |C_1| E_0 && \leftarrow ~ 2^{nd} \text{ allowed energy value} \\
 &&\vdots
\end{align}
$$

To plot the function for $z$, since $S = z - \bar{E}$, we have to shift the plot by $\bar{E}$. Knowing the possible values of $\bar{E}$ (which are the roots $C_{i}$), we just have to shift $\theta(S)$ to the right to put $C_{i}$ in the origin and discard everything for $z < 0$.
For each energy level we get a different wave function.

#todo add plots

From above ( #todo ) we know that $E = E_{xy} + E_{z}$ and thus:

$$
E = \frac{\hbar^{2}k^{2}}{2m} + |c_{n}|E_0 \tag{7}
$$



![[paraboloid subbands.png|400]]

## Density of states of a 2DEG

#todo add better explanation

We calculate the DOS for one sub-band and then extend the results to the others. For simplicity we suppose that there is only one sub-band with vertex in the origin and thus:

$$
E = \frac{\hbar^{2}k^{2}}{2m} \tag{7b}
$$

Since we are in a 2D case, we normalize the DOS to the area, instead of the volume:

$$
D(E) = \frac{1}{A} \frac{dN(E)}{dE} \qquad A=L_{x}L_{y} 
$$
$$   
k_{x} = \frac{2\pi}{L_{x}} \cdot N_1 \quad k_{y} = \frac{2\pi}{L_{y}} \cdot N_2
$$

Now we can follow the same steps taken in the [[#Density of states (DOS)|original case]].

![[2DEG DOS.png|400]]

$$
N = \frac{\overbrace{ \pi k^{2} }^{ \text{area of circle} }}{\frac{2\pi}{L_{x}} \cdot \frac{2\pi}{L_{y}}} \cdot \underset{ \substack{ \uparrow \\ \text{spin} } }{ 2 } = A \frac{k^{2}}{2\pi}
$$

Using $(7b)$ we can rewrite $N$ as a function of $E$ 

$$
N(E) = \frac{A}{2\pi} \frac{2mE}{\hbar^{2}}
$$

And finally, for a given sub band:

$$
D(E) = \frac{1}{\cancel{ A }} \frac{m\cancel{ A }}{\pi \hbar^{2}} = \frac{m}{\pi \hbar^{2}}
$$

If we now consider all sub bands we get 

![[2DEG DOS 2.png|400]]

$$
D(E) = \frac{m}{\pi \hbar^{2}} \sum_{i=1}^{\infty} M(E - E_{i}) \\
$$

$$
M(E - E_{i}) = \begin{cases}
\begin{align}
1 && E \geq E_{i} \\
0 && E < E_{i}
\end{align}
\end{cases}
$$

## MEMT (MODFET)

#todo 

