---
nextnote: 
author: BabelDev0
authorlink: https://github.com/BabelDev0
---
# QWs SUPERLATTICES

![[MQW_superlattice.png|450]]

A QW superlattice is formed by stacking multiple quantum wells. The barrier layers are usually made of a material with a larger band gap than the quantum well material. The close proximity of multiple quantum wells allows for the wavefunctions of electrons in adjacent wells to overlap (if the barrier has the rigth width). 

For the square potential well, we could apply the Kronig-Penney model to solve the Schrödinger equation.

![[realization_superlattice.png|400]]

The figure shows the periodic potential with period $d = a + b$. 
This has the form:

$$
V(x)=\begin{cases}  
0 \qquad 0 < x < a\\
V_{0} \qquad -b < x < 0 \ \text{or}\ a<x<b\\
\end{cases}
$$

so we can write the TISE for the two regions:

$$
\displaylines{
\frac{d^2\psi_{w}}{dx^2} + \frac{2mE}{\hbar^2}\psi_{w} = 0 \quad 0 < x < a 
\\\\
\frac{d^2\psi_{b}}{dx^2} + \frac{2m(E - V_0)}{\hbar^2}\psi_{b} = 0 \quad a < x < b
} 
$$

Then the solutions would be:

$$
\displaylines{
\psi_w = Ae^{ik_{w} x} + Be^{-ik_{w} x} \quad 0 < x < a
\\\\
\psi_b = Ce^{k_{b} x} + De^{-k_{b} x} \quad a < x < b
\\\\
k_{w} = \sqrt{\frac{2mE}{\hbar}} \qquad k_{b} = \sqrt{\frac{2m(V_0 - E)}{\hbar}}
}
$$

Since we are interested in the case in witch $E<V_0$ we have that $k_{w} \in \mathbb{R}$ and $k_{b}$ is an imaginary wave vector.

Due to the periodicity of the structure we consider the following boundary condition and the Bloch theorem:

$$
\displaylines{
\psi_w(0) = \psi_b(0) \quad \psi'_w(0) = \psi'_b(0)
\\\\
\psi_w(a) = \psi_b(a) \quad \psi'_w(a) =\psi'_b(a)
\\\\
\text{Bloch theorem} \quad \psi(x + d) = e^{ikd}\psi(x) \quad d = a + b \qquad 
}
$$

so for $x = d$ the wave function must be continuous:

$$
\displaylines{
\psi_w(d) = \psi_b(d) \implies
\\\\
\psi_w(d)=\psi_{w}(0+d) = e^{ikd}\psi_{w}(0) = \psi_b(d)
}
$$

substituting with the wave function:

$$
\displaylines{
e^{ikd}\{Ae^{ik_{w} o} + Be^{-ik_{w} 0}\}=Ce^{k_{b} d} + De^{-k_{b} d}
\\\\
e^{ikd}(A+B) = Ce^{k_{b} d} + De^{-k_{b} d}
}

$$

also the derivative must be continuous:

$$
\displaylines{
\frac{d}{dx}\psi_w(d) = \frac{d}{dx}\psi_b(d) \implies
\\\\
\frac{d}{dx}\psi_w(0+d) = \frac{d}{dx}e^{ikd}\psi_w(0) = \frac{d}{dx}\psi_b(d) \implies
\\\\
e^{ikd}\frac{d}{dx}\psi_w(0) = \frac{d}{dx}\psi_b(d)
}
$$

substituting with the wave function:

$$
\displaylines{
e^{ikd}\frac{d}{dx}\psi_w(0) = \frac{d}{dx}\psi_b(d)
\\\\
e^{ikd}\ i\ k_{w}\{A-B\}=ik_{b}Ce^{ik_{b} d} - ik_{b}De^{i-k_{b} d}
\\\\
k_{w} e^{ikd} (A-B) = k_{b}(Ce^{ik_{b}d}-De^{-ik_{b}d})
}
$$

now using the two equation from the boundary condition an the other two from the Bloch theorem we can solve the system of the 4 unknown ($A,B,C,D$) and we get:

$$
\frac{k_{b}^2 - k_{w}^2}{2k_{w} k_{b}} \sinh(k_{b} b) \sin(k_{w} a) - \cosh(k_{b} b) \cos(k_{w} a) = \cos(k(a + b))
$$

Plotting one side of the equation:

![[allowed_bands_gaph.png|500]]
the only allowed region are thus for which the cosine lie between -1 and 1.

The domain in k-space has become known as the SUPERLATTICE Brillouin Zone. Just as a QW can have more that a confined state, superlattices can have more that a miniband:

![[multiple_miniband.png|450]]

the slope of the band is related to the velocity of the electron inside the superlattice, which is different from 0, contrary to the QW case where $v=0$ and the band is flat, in this case the wave function is not a standing wave but describes an electron traveling through the superlattice. As we can see in the second band the velocity is higher, indeed the electron in this band are more energetic, thus more delocalized.

![[schematic_superlattice_minibad.png|400]]

Schematic diagram of a Superlattice, showing the formation of minibands from the energy levels of the corresponding single QW. The structure forms an artificial one-dimensional crystal with period ($d=a + b=L_{w}+l_{b}$), where $L_w\  \text{or} \ a$ and $L_B\  \text{or} \ b$ represent the thickness of the QW and barrier regions respectively. The width of the minibands depends on the strength of the coupling through the barriers. It is frequently the case that the lowest hole states do not couple strongly, and hence remain localized within their respective wells, as shown in the figure.

The width of the band change with $L_w/L_b$ and also the effective mass.

![[effectivemass_and_well_width.png|400]]

The graph shows new value of effective mass for an electron at $\Gamma$ moving in the superlattice miniband as function of $L_w=L_{B}$. The graph's values are logical, considering that for an electron to move, it needs to tunnel through barriers. As these barriers become thicker, the electron's movement is impeded, resulting in a significantly reduced velocity compared to an electron in a solid. This slowdown is shown by the effective mass, which is multiple times greater (1, 2, 3, etc.) than the standard electron mass $m_0$. This is in contrast to the situation in solids, where the effective mass is typically $m^* \approx 0.7m_{0}$.

## Energy comparison between superlattice and SQW

![[MQW_vs_superlattice.png|500]]

  
The graph presents the energy levels at $k=0$ ($\Gamma$) and $k=\frac{\pi}{L}$​ ($X$), delineating the lower and upper limits of the superlattice minibands alongside the ground state energy of a single quantum well of identical width. It is observed that when the width exceeds $60$ angstroms, there is a convergence of energy levels. This marks a transition from superlattice behavior to multiple quantum well (MQW) behavior, wherein charge carriers are no longer capable of tunneling through the barriers. Additionally, the image highlights the qualitative distinctions between the superlattice scenario and the MQW scenario.

## Density of states of the superlattice

![[DOS_superlattice.png|500]]

The density of states (DOS) in a superlattice differs significantly from that of a 2D multiple quantum well (MQW) due to the presence of minibands. In the superlattice, the DOS transitions between levels are not abrupt but exhibit a parabolic shape, reflecting the gradual filling of these minibands. Notably, the shift in the DOS at the first miniband level is less pronounced compared to the second, which can be attributed to the smaller width of the first miniband in comparison to the subsequent one

# QCL (Quantum Cascade Laser)

## ISB 
The engineered band structure of QWs leads to the possibility of intersubband (ISB ) transitions which take place between confined states within the conduction or valence bands. The transitions typically occur in the infrared spectral region. Intersubband emission in superlattices is at the base of the operating concepts of the Quantum Cascade Lasers (QCL).

![[QCL.png|400]]

When combined with a sloped potential bias from well to well, a single electron can cascade through the quantum well structure and emit multiple photons, as shown in the figure above. As a result, QCLs can produce high power at long wavelengths through the combination of both quantum and cascade effects. Emission occurs in the IR region (application to IR emitters, IR sensors, gas sensors.

The QCL, which was first demonstrated in 1994 at Bell Labs in Murray Hill, NJ, is a semiconductor laser, but it operates under very different physical principles than traditional semiconductor diode lasers. Diode lasers achieve stimulated emission through electron-hole recombination between the conduction and valance band. In a QCL, one uses tens or even hundreds of quantum wells to decouple the emission wavelength from the bandgap energy entirely. The decoupling results from the formation of subbands in the conduction band, allowing for stimulated emission to occur within the conduction band itself, this is known as an intersubband transition. Under these circumstances, stimulated emission does not result in electron-hole recombination, leaving the electron within the conduction band. The wavelength of the emitted light is determined by the energy differences between these subbands, not by the material’s bandgap. This allows for greater flexibility in designing the laser to emit at specific wavelengths

![[ISB.png|400]]

# Bloch oscillation

Is a phenomenon from solid state physics. It describes the oscillation of a particle (e.g. an electron) confined in a periodic potential when a constant force is acting on it. The motion of electrons in a perfect crystal under the action of a constant electric field would be oscillatory instead of uniform.

![[bloch_oscillations.png|550]]

While in natural crystals this phenomenon is extremely hard to observe due to the scattering of electrons by lattice defects, it has been observed in semiconductor superlattices.